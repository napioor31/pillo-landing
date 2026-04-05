import { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { useTranslation } from 'react-i18next';
import { getRoleContent } from './data/content';
import SEO from './components/SEO';
import JsonLd from './components/JsonLd';
import { websiteSchema, organizationSchema, softwareAppSchema, faqSchema } from './data/schemas';
import HeroSection from './components/HeroSection';
import HowItWorksSection from './components/HowItWorksSection';
import FeaturesSection from './components/FeaturesSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import LanguageSwitcher from './components/LanguageSwitcher';

const Regulamin = lazy(() => import('./pages/Regulamin'));
const PolitykaPrywatnosci = lazy(() => import('./pages/PolitykaPrywatnosci'));
const Download = lazy(() => import('./pages/Download'));
const Contact = lazy(() => import('./pages/Contact'));
const Testing = lazy(() => import('./pages/Testing'));
const DeleteAccount = lazy(() => import('./pages/DeleteAccount'));

function LandingPage({ loaderDone }) {
  const [activeRole, setActiveRole] = useState('patient');
  const { t, i18n } = useTranslation('landing');
  const currentContent = getRoleContent(activeRole, t, i18n.resolvedLanguage ?? i18n.language);

  return (
    <main className="min-h-screen bg-surface">
      <SEO
        isHomepage
        title="Pillo — Aplikacja do zarządzania lekami"
        description="Pillo pomaga pacjentom i opiekunom zarządzać lekami, ustawiać przypomnienia i śledzić harmonogram przyjmowania. Bezpłatne dla pacjentów, 29,90 zł/mies. dla opiekunów."
        canonical="/"
        lang={i18n.language}
      />
      <JsonLd schema={websiteSchema} id="schema-website" />
      <JsonLd schema={organizationSchema} id="schema-organization" />
      <JsonLd schema={softwareAppSchema} id="schema-app" />
      <JsonLd schema={faqSchema} id="schema-faq" />
      <HeroSection
        activeRole={activeRole}
        onRoleChange={setActiveRole}
        content={currentContent}
        loaderDone={loaderDone}
      />
      <HowItWorksSection
        activeRole={activeRole}
        content={currentContent.howItWorks}
      />
      <FeaturesSection
        activeRole={activeRole}
        features={currentContent.features}
      />
      <TestimonialsSection activeRole={activeRole} testimonials={currentContent.testimonials} />
      <FAQ activeRole={activeRole} faqs={currentContent.faq} />
      <Footer activeRole={activeRole} footer={currentContent.footer} />
    </main>
  );
}

function App() {
  const [loaderDone, setLoaderDone] = useState(false);

  useEffect(() => {
    const MIN_MS = 0;
    const start = window.__loaderStart ?? Date.now();
    const elapsed = Date.now() - start;
    const delay = Math.max(0, MIN_MS - elapsed);

    const timer = setTimeout(() => {
      const loader = document.getElementById('page-loader');
      if (loader) {
        loader.classList.add('hidden');
        let settled = false;
        const done = () => {
          if (settled) return;
          settled = true;
          loader.remove();
          setLoaderDone(true);
        };
        loader.addEventListener('transitionend', done, { once: true });
        // Fallback: if the CSS transition is skipped (reduced-motion, no styles), resolve anyway
        setTimeout(done, 600);
      } else {
        setLoaderDone(true);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <SpeedInsights />
      <ScrollToTop />
      <LanguageSwitcher />
      <Suspense fallback={<div className="min-h-screen bg-surface" aria-busy="true" />}>
        <Routes>
          <Route path="/" element={<LandingPage loaderDone={loaderDone} />} />
          <Route path="/terms" element={<Regulamin />} />
          <Route path="/privacy-policy" element={<PolitykaPrywatnosci />} />
          <Route path="/download" element={<Download />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/testing" element={<Testing />} />
          <Route path="/delete" element={<DeleteAccount />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
