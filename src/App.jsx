import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { roleContent } from './data/content';
import HeroSection from './components/HeroSection';
import HowItWorksSection from './components/HowItWorksSection';
import FeaturesSection from './components/FeaturesSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Regulamin from './pages/Regulamin';
import PolitykaPrywatnosci from './pages/PolitykaPrywatnosci';
import Download from './pages/Download';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';

function LandingPage({ loaderDone }) {
  const [activeRole, setActiveRole] = useState('patient');
  const currentContent = roleContent[activeRole];

  return (
    <main className="min-h-screen bg-surface">
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
    const MIN_MS = 1200;
    const start = window.__loaderStart ?? Date.now();
    const elapsed = Date.now() - start;
    const delay = Math.max(0, MIN_MS - elapsed);

    const timer = setTimeout(() => {
      const loader = document.getElementById('page-loader');
      if (loader) {
        loader.classList.add('hidden');
        loader.addEventListener('transitionend', () => {
          loader.remove();
          setLoaderDone(true);
        }, { once: true });
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
      <Routes>
        <Route path="/" element={<LandingPage loaderDone={loaderDone} />} />
        <Route path="/regulamin" element={<Regulamin />} />
        <Route path="/polityka-prywatnosci" element={<PolitykaPrywatnosci />} />
        <Route path="/download" element={<Download />} />
        <Route path="/kontakt" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
