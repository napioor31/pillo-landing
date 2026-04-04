import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, FlaskConical } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { logo } from '../assets/images';
import SEO from '../components/SEO';

// ─── Placeholder links — replace when ready ─────────────────────────────────
const TESTFLIGHT_URL = '#';   // e.g. 'https://testflight.apple.com/join/XXXXXXXX'
const GOOGLE_PLAY_URL = '#';  // e.g. 'https://play.google.com/apps/testing/...'
// ────────────────────────────────────────────────────────────────────────────

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: 'easeOut' },
});

export default function Testing() {
  const { i18n } = useTranslation('common');

  return (
    <div className="min-h-screen flex flex-col bg-surface relative overflow-x-hidden">
      <SEO
        title="Beta Testing — Pillo"
        description="Join the Pillo beta programme. Download the app via TestFlight (iOS) or Google Play (Android)."
        canonical="/testing"
        lang={i18n.language}
      />

      {/* ── Background ─────────────────────────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0" style={{
          background:
            'radial-gradient(ellipse 80% 60% at 15% 10%, #E8C27A33 0%, transparent 65%),' +
            'radial-gradient(ellipse 70% 70% at 85% 15%, #2F4A3F18 0%, transparent 60%),' +
            'radial-gradient(ellipse 90% 60% at 50% 100%, #5DB38D28 0%, transparent 60%),' +
            'radial-gradient(ellipse 60% 50% at 80% 70%, #E8C27A18 0%, transparent 55%)',
        }} />
        <div className="absolute top-[-8%] left-[-4%] w-[600px] h-[600px] rounded-full bg-accent-gold/20 blur-[140px]" />
        <div className="absolute top-[10%] right-[-6%] w-[480px] h-[480px] rounded-full bg-primary/12 blur-[120px]" />
        <div className="absolute bottom-[-8%] left-[10%] w-[560px] h-[560px] rounded-full bg-[#5DB38D]/22 blur-[130px]" />
        <div className="absolute top-[40%] left-[35%] w-[400px] h-[400px] rounded-full bg-accent-gold/12 blur-[100px]" />
        {/* Noise grain */}
        <div className="absolute inset-0 opacity-[0.025]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '180px 180px',
        }} />
      </div>

      {/* ── Navbar ──────────────────────────────────────────────────────── */}
      <nav className="relative z-50 w-full py-4 bg-surface/70 backdrop-blur-md border-b border-divider/40">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
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

      {/* ── Main ────────────────────────────────────────────────────────── */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 py-16 sm:py-24">

        {/* Badge */}
        <motion.div {...fadeUp(0)} className="flex items-center gap-2 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#5DB38D]/15 border border-[#5DB38D]/30 text-[#5DB38D] text-xs font-semibold uppercase tracking-widest">
            <FlaskConical size={12} aria-hidden="true" />
            Beta Testing
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          {...fadeUp(0.08)}
          className="text-3xl sm:text-5xl md:text-6xl font-bold text-primary text-center leading-[1.1] mb-4 font-[family-name:var(--font-family-heading)]"
        >
          Test Pillo<br />
          <span className="text-primary/50">before launch</span>
        </motion.h1>

        {/* Sub-heading */}
        <motion.p
          {...fadeUp(0.16)}
          className="text-text-secondary text-base sm:text-lg leading-relaxed max-w-md text-center mb-12"
        >
          You're invited to try the early version of Pillo.
          Choose your platform below and help us shape the app.
        </motion.p>

        {/* Cards */}
        <div className="w-full max-w-xl grid grid-cols-1 sm:grid-cols-2 gap-4">

          {/* TestFlight — iOS */}
          <motion.a
            {...fadeUp(0.22)}
            href={TESTFLIGHT_URL}
            target="_blank"
            rel="noopener noreferrer"
            id="testflight-link"
            aria-label="Download via TestFlight for iOS"
            className="group relative flex flex-col items-center gap-4 p-7 rounded-2xl border border-divider/60 bg-surface/80 backdrop-blur-sm hover:border-primary/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            {/* Icon */}
            <img
              src="/apple-173-svgrepo-com.svg"
              alt=""
              aria-hidden="true"
              className="w-8 h-8"
            />

            {/* Text */}
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-text-secondary/60 mb-1">iOS</p>
              <p className="text-lg font-bold text-primary font-[family-name:var(--font-family-heading)]">TestFlight</p>
              <p className="text-sm text-text-secondary/80 mt-1">
                {TESTFLIGHT_URL === '#' ? 'Link coming soon' : 'Tap to open TestFlight'}
              </p>
            </div>

            {/* Coming soon pill */}
            {TESTFLIGHT_URL === '#' && (
              <span className="absolute top-3 right-3 text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-accent-gold/20 text-accent-gold border border-accent-gold/30">
                Soon
              </span>
            )}
          </motion.a>

          {/* Google Play — Android */}
          <motion.a
            {...fadeUp(0.28)}
            href={GOOGLE_PLAY_URL}
            target="_blank"
            rel="noopener noreferrer"
            id="google-play-link"
            aria-label="Download via Google Play for Android"
            className="group relative flex flex-col items-center gap-4 p-7 rounded-2xl border border-divider/60 bg-surface/80 backdrop-blur-sm hover:border-[#5DB38D]/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5DB38D] focus-visible:ring-offset-2"
          >
            {/* Icon */}
            <img
              src="/google-play-svgrepo-com.svg"
              alt=""
              aria-hidden="true"
              className="w-7 h-7"
            />

            {/* Text */}
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-text-secondary/60 mb-1">Android</p>
              <p className="text-lg font-bold text-primary font-[family-name:var(--font-family-heading)]">Google Play</p>
              <p className="text-sm text-text-secondary/80 mt-1">
                {GOOGLE_PLAY_URL === '#' ? 'Link coming soon' : 'Open in Play Store'}
              </p>
            </div>

            {/* Coming soon pill */}
            {GOOGLE_PLAY_URL === '#' && (
              <span className="absolute top-3 right-3 text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-accent-gold/20 text-accent-gold border border-accent-gold/30">
                Soon
              </span>
            )}
          </motion.a>
        </div>

        {/* Fine print */}
        <motion.p
          {...fadeUp(0.36)}
          className="text-text-secondary/45 text-xs mt-8 text-center"
        >
          This is a pre-release build. Features and design may change.
        </motion.p>
      </main>

      {/* ── Footer ──────────────────────────────────────────────────────── */}
      <footer className="relative z-20 shrink-0 border-t border-divider/40 py-4 px-6 bg-surface/60 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-sm">
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
