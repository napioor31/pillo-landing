import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Trash2, Smartphone, Mail, ChevronRight, AlertTriangle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { logo } from '../assets/images';
import SEO from '../components/SEO';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: 'easeOut' },
});

const SUPPORT_EMAIL = 'support@trypillo.pl';

// Path to the screenshot — add your image to /public/images/ and update this
const SCREENSHOT_SRC = '/images/delete-screen.png';

const steps = [
  {
    number: '01',
    title: 'Open Settings',
    description: 'Tap the profile icon in the top-right corner of the app to open your account settings.',
  },
  {
    number: '02',
    title: 'Tap "Delete Account"',
    description: 'Scroll to the bottom of the Settings screen and tap the red "Delete Account" button.',
  },
  {
    number: '03',
    title: 'Confirm deletion',
    description: 'Read the confirmation prompt and tap "Delete" to permanently remove your account and all data.',
  },
];

export default function DeleteAccount() {
  const { i18n } = useTranslation('common');

  return (
    <div className="min-h-screen flex flex-col bg-surface relative overflow-x-hidden">
      <SEO
        title="Delete Account — Pillo"
        description="Learn how to delete your Pillo account. Use the Delete Account button in the app settings, or contact our support team."
        canonical="/delete"
        lang={i18n.language}
      />

      {/* ── Background ─────────────────────────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0" style={{
          background:
            'radial-gradient(ellipse 80% 60% at 10% 0%, #B9525218 0%, transparent 60%),' +
            'radial-gradient(ellipse 70% 70% at 90% 10%, #2F4A3F10 0%, transparent 60%),' +
            'radial-gradient(ellipse 80% 60% at 50% 100%, #5DB38D12 0%, transparent 60%)',
        }} />
        <div className="absolute top-[-10%] left-[-5%] w-[700px] h-[700px] rounded-full bg-error/8 blur-[160px]" />
        <div className="absolute top-[5%] right-[-8%] w-[500px] h-[500px] rounded-full bg-primary/8 blur-[130px]" />
        <div className="absolute bottom-[-10%] right-[5%] w-[600px] h-[600px] rounded-full bg-[#5DB38D]/10 blur-[150px]" />
        {/* Noise grain */}
        <div className="absolute inset-0 opacity-[0.022]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '180px 180px',
        }} />
      </div>

      {/* ── Navbar ──────────────────────────────────────────────────────── */}
      <nav className="relative z-50 w-full py-4 bg-surface/70 backdrop-blur-md border-b border-divider/40 shrink-0">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:rounded-lg"
          >
            <img src={logo.src} alt={logo.alt} className="h-9 w-auto rounded-xl" />
            <span className="text-xl font-bold text-primary">Pillo</span>
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors text-sm font-medium"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            Back to site
          </Link>
        </div>
      </nav>

      {/* ── Split-screen main ───────────────────────────────────────────── */}
      <main className="relative z-10 flex-1 flex flex-col lg:flex-row">

        {/* ── LEFT PANEL — instructions ───────────────────────────────── */}
        <div className="flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-16 xl:px-24 py-14 lg:py-20">
          <div className="max-w-lg w-full mx-auto lg:mx-0">

            {/* Badge */}
            <motion.div {...fadeUp(0)} className="mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-error/10 border border-error/20 text-error text-xs font-semibold uppercase tracking-widest">
                <Trash2 size={11} aria-hidden="true" />
                Account Deletion
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              {...fadeUp(0.07)}
              className="text-3xl sm:text-4xl xl:text-5xl font-bold text-primary leading-[1.1] mb-4 font-[family-name:var(--font-family-heading)]"
            >
              How to delete<br />
              <span className="text-primary/45">your account</span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              {...fadeUp(0.13)}
              className="text-text-secondary text-base leading-relaxed mb-10"
            >
              You can delete your account at any time — directly in the app,
              or by contacting our support team.
            </motion.p>

            {/* ── Option 1: In-app steps ──────────────────────────────── */}
            <motion.div {...fadeUp(0.18)} className="mb-8">
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Smartphone size={16} className="text-primary" aria-hidden="true" />
                </div>
                <h2 className="font-semibold text-text-primary text-base">In the app</h2>
              </div>

              <ol className="flex flex-col gap-5" aria-label="Steps to delete your account in the app">
                {steps.map((step, i) => (
                  <motion.li
                    key={step.number}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.26 + i * 0.08, ease: 'easeOut' }}
                    className="flex items-start gap-4"
                  >
                    <span
                      aria-hidden="true"
                      className="shrink-0 mt-0.5 w-8 h-8 rounded-lg bg-primary/8 border border-primary/12 flex items-center justify-center text-[11px] font-bold text-primary/60 font-[family-name:var(--font-family-heading)]"
                    >
                      {step.number}
                    </span>
                    <div>
                      <p className="font-semibold text-text-primary text-sm mb-0.5">{step.title}</p>
                      <p className="text-text-secondary text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </motion.li>
                ))}
              </ol>
            </motion.div>

            {/* Warning */}
            <motion.div
              {...fadeUp(0.5)}
              className="flex items-start gap-2.5 px-4 py-3 rounded-xl bg-warning/8 border border-warning/20 mb-8"
            >
              <AlertTriangle size={15} className="text-warning shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-xs text-text-secondary/80 leading-snug">
                <strong className="text-text-primary font-medium">This action is permanent.</strong>{' '}
                All your medication schedules, reminders, and personal data will be erased and cannot be recovered.
              </p>
            </motion.div>

            {/* Divider */}
            <motion.div
              {...fadeUp(0.56)}
              className="flex items-center gap-3 mb-7"
              aria-hidden="true"
            >
              <div className="flex-1 h-px bg-divider/50" />
              <span className="text-[11px] uppercase tracking-widest text-text-secondary/35 font-semibold">or</span>
              <div className="flex-1 h-px bg-divider/50" />
            </motion.div>

            {/* ── Option 2: Email ─────────────────────────────────────── */}
            <motion.div {...fadeUp(0.62)}>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-lg bg-[#5DB38D]/12 flex items-center justify-center shrink-0">
                  <Mail size={16} className="text-[#5DB38D]" aria-hidden="true" />
                </div>
                <h2 className="font-semibold text-text-primary text-base">Contact us</h2>
              </div>

              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                Can't find the button? Email us and we'll delete your account within{' '}
                <strong className="text-text-primary font-medium">2 business days</strong>.
              </p>

              <a
                id="delete-contact-email"
                href={`mailto:${SUPPORT_EMAIL}?subject=Account%20Deletion%20Request`}
                aria-label={`Send account deletion request to ${SUPPORT_EMAIL}`}
                className="group inline-flex w-full items-center justify-between gap-3 px-4 py-3.5 rounded-xl border border-[#5DB38D]/25 bg-[#5DB38D]/7 hover:bg-[#5DB38D]/14 hover:border-[#5DB38D]/45 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5DB38D] focus-visible:ring-offset-2"
              >
                <span className="flex items-center gap-2.5">
                  <Mail size={15} className="text-[#5DB38D]" aria-hidden="true" />
                  <span className="font-semibold text-primary text-sm">{SUPPORT_EMAIL}</span>
                </span>
                <ChevronRight
                  size={15}
                  className="text-text-secondary/40 group-hover:text-[#5DB38D] group-hover:translate-x-0.5 transition-all duration-200"
                  aria-hidden="true"
                />
              </a>

              <p className="text-text-secondary/45 text-xs mt-3 leading-snug">
                Please write from the email address linked to your Pillo account.
              </p>
            </motion.div>

          </div>
        </div>

        {/* ── RIGHT PANEL — screenshot ─────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          className="
            relative flex-1 flex items-center justify-center
            lg:border-l lg:border-divider/40
            bg-gradient-to-br from-surface-alt/60 via-surface/40 to-surface-alt/80
            px-8 py-14 lg:py-0
            min-h-[420px] lg:min-h-0
          "
        >
          {/* Subtle inner background tint */}
          <div className="pointer-events-none absolute inset-0" aria-hidden="true" style={{
            background: 'radial-gradient(ellipse 80% 70% at 50% 40%, #B9525208 0%, transparent 70%)',
          }} />

          {/* Phone frame */}
          <div className="relative z-10 w-full max-w-[280px] sm:max-w-[300px] xl:max-w-[320px]">
            {/* Outer phone shell */}
            <div
              className="relative rounded-[44px] p-2.5 shadow-2xl"
              style={{
                background: 'linear-gradient(145deg, #2a2a2a 0%, #1a1a1a 100%)',
                boxShadow: '0 40px 80px -20px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.07), inset 0 0 0 1px rgba(255,255,255,0.04)',
              }}
            >
              {/* Screen bezel */}
              <div className="rounded-[36px] overflow-hidden bg-[#111] aspect-[9/19.5] relative">
                {/* Dynamic island */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[90px] h-[30px] rounded-full bg-black z-30" aria-hidden="true" />

                {/* Screenshot or placeholder */}
                {SCREENSHOT_SRC ? (
                  <img
                    src={SCREENSHOT_SRC}
                    alt="Pillo app settings screen showing the Delete Account button"
                    className="w-full h-full object-cover object-top"
                    onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling.style.display = 'flex'; }}
                  />
                ) : null}

                {/* Fallback placeholder (shown if image fails or not set) */}
                <div
                  className="absolute inset-0 flex flex-col items-center justify-end pb-16 gap-3 bg-gradient-to-b from-[#f5f5f0] to-[#eeebe5]"
                  style={{ display: SCREENSHOT_SRC ? 'none' : 'flex' }}
                  aria-hidden="true"
                >
                  <div className="w-3/4 h-12 rounded-2xl bg-error/90 flex items-center justify-center gap-2 shadow-lg">
                    <Trash2 size={16} className="text-white" />
                    <span className="text-white text-sm font-semibold">Delete Account</span>
                  </div>
                  <p className="text-[10px] text-text-secondary/50 text-center leading-tight px-4">
                    Add your screenshot to<br />/public/images/delete-screen.png
                  </p>
                </div>
              </div>
            </div>

            {/* Reflection / glow underneath */}
            <div
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-12 blur-2xl rounded-full opacity-40"
              style={{ background: 'radial-gradient(ellipse, #B95252 0%, transparent 70%)' }}
              aria-hidden="true"
            />

            {/* Caption badge */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface/90 border border-divider/60 text-[11px] text-text-secondary/70 font-medium backdrop-blur-sm shadow-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-error/70" aria-hidden="true" />
                Settings → Delete Account
              </span>
            </div>
          </div>
        </motion.div>

      </main>

      {/* ── Footer ──────────────────────────────────────────────────────── */}
      <footer className="relative z-20 shrink-0 border-t border-divider/40 py-4 px-6 bg-surface/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-sm">
          <p className="text-text-secondary/50">© {new Date().getFullYear()} Pillo. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="text-text-secondary hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-text-secondary hover:text-primary transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
