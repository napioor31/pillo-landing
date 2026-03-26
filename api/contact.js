import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const ALLOWED_ORIGINS = new Set([
  'https://trypillo.pl',
  'https://www.trypillo.pl',
]);

const RATE_MAP = new Map();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60_000;

function isRateLimited(ip) {
  const now = Date.now();
  const entry = RATE_MAP.get(ip) ?? { count: 0, reset: now + RATE_WINDOW_MS };
  if (now > entry.reset) { entry.count = 0; entry.reset = now + RATE_WINDOW_MS; }
  entry.count++;
  RATE_MAP.set(ip, entry);
  return entry.count > RATE_LIMIT;
}

export default async function handler(req, res) {
  // CORS
  const origin = req.headers.origin ?? '';
  if (ALLOWED_ORIGINS.has(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Vary', 'Origin');
  }
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  // Rate limit
  const ip = (req.headers['x-forwarded-for'] ?? '').split(',')[0].trim() || 'unknown';
  if (isRateLimited(ip)) return res.status(429).json({ error: 'Too many requests.' });

  // Validate
  const { name, email, topic, message } = req.body || {};
  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!name?.trim() || !EMAIL_RE.test(email) || !message?.trim()) {
    return res.status(400).json({ error: 'Missing required fields.' });
  }

  // Send via Resend
  const subject = topic ? `[Pillo] ${topic}` : '[Pillo] Nowa wiadomość';
  const { error } = await resend.emails.send({
    from: 'Pillo Kontakt <kontakt@trypillo.pl>',
    to: 'support@trypillo.pl',
    reply_to: email,
    subject,
    text: `Od: ${name} <${email}>\n\n${message}`,
    html: `<p><strong>Od:</strong> ${name} &lt;${email}&gt;</p><p><strong>Temat:</strong> ${topic || '—'}</p><hr/><p>${message.replace(/\n/g, '<br/>')}</p>`,
  });

  if (error) {
    console.error('[contact] Resend error:', JSON.stringify(error));
    return res.status(500).json({ error: 'Failed to send message. Please try again.' });
  }

  return res.status(200).json({ success: true });
}
