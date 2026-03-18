import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { logo, storeBadges } from '../assets/images';

const APP_STORE_URL = 'https://apps.apple.com';
const GOOGLE_PLAY_URL = 'https://play.google.com';

function detectPlatform() {
  const ua = navigator.userAgent || '';
  if (/iPhone|iPad|iPod/i.test(ua)) return 'ios';
  if (/Android/i.test(ua)) return 'android';
  return 'desktop';
}

export default function Download() {
  const [platform, setPlatform] = useState('desktop');
  const [redirecting, setRedirecting] = useState(false);

  useEffect(() => {
    const p = detectPlatform();
    setPlatform(p);
    if (p === 'ios' || p === 'android') {
      setRedirecting(true);
      const url = p === 'ios' ? APP_STORE_URL : GOOGLE_PLAY_URL;
      const t = setTimeout(() => { window.location.href = url; }, 1800);
      return () => clearTimeout(t);
    }
  }, []);

  return (
    <div className="h-screen overflow-hidden flex flex-col bg-surface relative">

      {/* Background */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        {/* Base mesh gradient */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 80% 60% at 15% 10%, #E8C27A33 0%, transparent 65%), radial-gradient(ellipse 70% 70% at 85% 15%, #2F4A3F18 0%, transparent 60%), radial-gradient(ellipse 90% 60% at 50% 100%, #5DB38D28 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 70%, #E8C27A18 0%, transparent 55%)'
        }} />
        {/* Orbs */}
        <div className="absolute top-[-8%] left-[-4%] w-[600px] h-[600px] rounded-full bg-accent-gold/20 blur-[140px]" />
        <div className="absolute top-[10%] right-[-6%] w-[480px] h-[480px] rounded-full bg-primary/12 blur-[120px]" />
        <div className="absolute bottom-[-8%] left-[10%] w-[560px] h-[560px] rounded-full bg-[#5DB38D]/22 blur-[130px]" />
        <div className="absolute top-[40%] left-[35%] w-[400px] h-[400px] rounded-full bg-accent-gold/12 blur-[100px]" />
        <div className="absolute bottom-[15%] right-[5%] w-[320px] h-[320px] rounded-full bg-[#2F4A3F]/8 blur-[90px]" />
        {/* Noise grain overlay */}
        <div className="absolute inset-0 opacity-[0.025]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '180px 180px',
        }} />
      </div>

      {/* Navbar */}
      <nav className="relative z-50 shrink-0 w-full py-4 bg-surface/70 backdrop-blur-md border-b border-divider/40">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:rounded-lg">
            <img src={logo.src} alt={logo.alt} className="h-9 w-auto rounded-xl" />
            <span className="text-xl font-bold text-primary">Pillo</span>
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors text-sm font-medium"
          >
            <i className="fi fi-rr-arrow-left text-base leading-none" aria-hidden="true" />
            Wróć na stronę
          </Link>
        </div>
      </nav>

      {/* Main — fills remaining height, no scroll */}
      <main className="relative z-10 flex-1 overflow-hidden">

        {/* Text + badges — top center */}
        <div className="text-center px-6 pt-10 sm:pt-14 relative z-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-[#5DB38D] text-sm font-semibold uppercase tracking-widest mb-3"
          >
            Dostępne bezpłatnie
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-primary leading-[1.1] mb-4 font-[family-name:var(--font-family-heading)]"
          >
            Zadbaj o siebie<br />
            <span className="text-primary/55">każdego dnia</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-text-secondary text-lg leading-relaxed max-w-lg mx-auto"
          >
            {redirecting
              ? `Za chwilę przekierujemy Cię do ${platform === 'ios' ? 'App Store' : 'Google Play'}…`
              : 'Inteligentne przypomnienia o lekach i spokój ducha — dla Ciebie i Twoich bliskich.'}
          </motion.p>

          {redirecting && (
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
              className="flex justify-center gap-1.5 mt-3"
            >
              {[0, 0.2, 0.4].map((d, i) => (
                <motion.div key={i} className="w-2 h-2 rounded-full bg-accent-gold"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1, delay: d, repeat: Infinity }}
                />
              ))}
            </motion.div>
          )}

          {/* Store badges */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-7"
          >
            <a
              href={GOOGLE_PLAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pobierz z Google Play"
              className={`block transition-all duration-300 hover:scale-105 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                platform === 'android' ? 'ring-2 ring-accent-gold ring-offset-2' : ''
              }`}
            >
              <img src={storeBadges.googlePlay} alt="Pobierz w Google Play" className="w-44 h-auto" />
            </a>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pobierz z App Store"
              className={`block transition-all duration-300 hover:scale-105 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                platform === 'ios' ? 'ring-2 ring-accent-gold ring-offset-2' : ''
              }`}
            >
              <img src={storeBadges.appStore} alt="Pobierz w App Store" className="w-36 h-auto" />
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            className="text-text-secondary/50 text-sm mt-3"
          >
            Bezpłatne · Bez konta · iOS i Android
          </motion.p>
        </div>

        {/* Phone image — absolute overlay, bottom-anchored */}
        <motion.img
          src="/images/download -pl.png"
          alt="Aplikacja Pillo na telefonie"
          draggable="false"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-auto h-[72vh] sm:h-[78vh] object-contain object-bottom pointer-events-none select-none"
        />

      </main>

      {/* Footer */}
      <footer className="relative z-20 shrink-0 border-t border-divider/40 py-4 px-6 bg-surface/60 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-sm">
          <p className="text-text-secondary/50">© 2026 Pillo. Wszystkie prawa zastrzeżone.</p>
          <div className="flex gap-6">
            <Link to="/polityka-prywatnosci" className="text-text-secondary hover:text-primary transition-colors">
              Polityka prywatności
            </Link>
            <Link to="/regulamin" className="text-text-secondary hover:text-primary transition-colors">
              Regulamin
            </Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
