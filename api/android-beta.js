import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const SEGMENT_ID = 'bd233ee1-0c07-4b4d-99bd-236c9ce5c6d3';

// Keep in sync with src/hooks/useAndroidBetaForm.js
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Allowed origins for CORS — add preview domains as needed
const ALLOWED_ORIGINS = new Set([
  'https://trypillo.pl',
  'https://www.trypillo.pl',
]);

// Simple in-memory rate limiter: max 3 requests per IP per 60 s
const RATE_MAP = new Map();
const RATE_LIMIT = 3;
const RATE_WINDOW_MS = 60_000;

function isRateLimited(ip) {
  const now = Date.now();
  const entry = RATE_MAP.get(ip) ?? { count: 0, reset: now + RATE_WINDOW_MS };
  if (now > entry.reset) {
    entry.count = 0;
    entry.reset = now + RATE_WINDOW_MS;
  }
  entry.count++;
  RATE_MAP.set(ip, entry);
  return entry.count > RATE_LIMIT;
}

export default async function handler(req, res) {
  const origin = req.headers.origin ?? '';
  if (ALLOWED_ORIGINS.has(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Vary', 'Origin');
  }
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const ip = (req.headers['x-forwarded-for'] ?? '').split(',')[0].trim() || 'unknown';
  if (isRateLimited(ip)) {
    return res.status(429).json({ error: 'Too many requests. Please try again later.' });
  }

  const { email } = req.body || {};

  if (!email || !EMAIL_RE.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  const { error } = await resend.contacts.create({
    email,
    unsubscribed: false,
    segments: [{ id: SEGMENT_ID }],
  });

  if (error) {
    const isDuplicate =
      error.statusCode === 409 ||
      error.statusCode === 422 ||
      error.message?.toLowerCase().includes('already');
    if (isDuplicate) {
      return res.status(409).json({ code: 'ALREADY_SUBSCRIBED' });
    }
    console.error('[android-beta] Resend error:', JSON.stringify(error));
    return res.status(500).json({ error: 'Failed to subscribe. Please try again.' });
  }

  return res.status(200).json({ success: true });
}
