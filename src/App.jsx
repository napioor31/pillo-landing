import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

function LandingPage() {
  const [activeRole, setActiveRole] = useState('patient');
  const currentContent = roleContent[activeRole];

  return (
    <main className="min-h-screen bg-surface">
      <HeroSection
        activeRole={activeRole}
        onRoleChange={setActiveRole}
        content={currentContent}
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
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/regulamin" element={<Regulamin />} />
        <Route path="/polityka-prywatnosci" element={<PolitykaPrywatnosci />} />
        <Route path="/download" element={<Download />} />
        <Route path="/kontakt" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
