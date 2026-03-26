import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { logo, storeBadges } from '../assets/images';
import SEO from '../components/SEO';

const APP_STORE_URL = 'https://apps.apple.com';
const GOOGLE_PLAY_URL = 'https://play.google.com';

function detectPlatform() {
  const ua = navigator.userAgent || '';
  if (/iPhone|iPad|iPod/i.test(ua)) return 'ios';
  if (/Android/i.test(ua)) return 'android';
  return 'desktop';
}

export default function Download() {
  const { t, i18n } = useTranslation('common');
  const [platform, setPlatform] = useState('desktop');
  const [redirecting, setRedirecting] = useState(false);

  useEffect(() => {
    const p = detectPlatform();
    setPlatform(p);
    if (p === 'ios' || p === 'android') {
      setRedirecting(true);
      const url = p === 'ios' ? APP_STORE_URL : GOOGLE_PLAY_URL;
      const timer = setTimeout(() => { window.location.href = url; }, 1800);
      return () => clearTimeout(timer);
    }
  }, []);

  const redirectDesc = platform === 'ios'
    ? t('download.descRedirectIos')
    : t('download.descRedirectAndroid');

  return (
    <div className="h-screen overflow-hidden flex flex-col bg-surface relative">
      <SEO
        title="Pobierz Pillo"
        description="Pobierz aplikację Pillo na iOS lub Android. Bezpłatne zarządzanie lekami z przypomnieniami dla pacjentów i zdalnym monitoringiem dla opiekunów."
        canonical="/download"
        lang={i18n.language}
      />

      {/* Background */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
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
            <ArrowLeft size={16} aria-hidden="true" />
            {t('nav.backToSite')}
          </Link>
        </div>
      </nav>

      {/* Main — fills remaining height, no scroll */}
      <main className="relative z-10 flex-1 flex flex-col overflow-hidden [@media(max-height:900px)]:justify-center">

        {/* Text + badges — top center */}
        <div className="text-center px-4 sm:px-6 pt-4 sm:pt-6 [@media(max-height:900px)]:pt-0 relative z-20 shrink-0">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-[#5DB38D] text-sm font-semibold uppercase tracking-widest mb-2"
          >
            {t('download.available')}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-[1.1] mb-3 font-[family-name:var(--font-family-heading)]"
          >
            {t('download.headline')}<br />
            <span className="text-primary/55">{t('download.headlineSub')}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-text-secondary text-lg leading-relaxed max-w-lg mx-auto"
          >
            {redirecting ? redirectDesc : t('download.descDefault')}
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
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-4"
          >
            <a
              href={GOOGLE_PLAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t('download.googlePlayAria')}
              className={`block transition-all duration-300 hover:scale-105 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${platform === 'android' ? 'ring-2 ring-accent-gold ring-offset-2' : ''
                }`}
            >
              <img src={storeBadges.googlePlay} alt={t('download.googlePlayAlt')} className="w-44 h-auto" />
            </a>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t('download.appStoreAria')}
              className={`block transition-all duration-300 hover:scale-105 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${platform === 'ios' ? 'ring-2 ring-accent-gold ring-offset-2' : ''
                }`}
            >
              <img src={storeBadges.appStore} alt={t('download.appStoreAlt')} className="w-36 h-auto" />
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            className="text-text-secondary/50 text-sm mt-3"
          >
            {t('download.badges')}
          </motion.p>
        </div>

        {/* Phone image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
          className="flex-1 min-h-0 flex items-end justify-center mt-2 px-6 [@media(max-height:900px)]:hidden"
        >
          <img
            src="/images/download -pl.png"
            alt={t('download.phoneAlt')}
            draggable="false"
            className="w-auto object-contain object-bottom pointer-events-none select-none"
            style={{ height: 'calc(100vh - 220px)' }}
          />
        </motion.div>

      </main>

      {/* Footer */}
      <footer className="relative z-20 shrink-0 border-t border-divider/40 py-4 px-6 bg-surface/60 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-sm">
          <p className="text-text-secondary/50">{t('footer.copyright', { year: new Date().getFullYear() })}</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="text-text-secondary hover:text-primary transition-colors">
              {t('footer.privacyPolicy')}
            </Link>
            <Link to="/terms" className="text-text-secondary hover:text-primary transition-colors">
              {t('footer.terms')}
            </Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
