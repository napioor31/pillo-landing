import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useCallback, useRef, useEffect } from 'react';
import { Smartphone, ArrowRight, ShieldCheck, Star } from 'lucide-react';
import Navbar from './Navbar';
import { heroPhone } from '../assets/images';

const HeroSection = ({ activeRole, onRoleChange, content }) => {
  const isCaregiver = activeRole === 'caregiver';
  const containerRef = useRef(null);
  const [containerHeight, setContainerHeight] = useState(null);

  const measureHalf = useCallback(() => {
    const img = containerRef.current?.querySelector('img');
    if (!img || !img.naturalWidth) return;
    const ratio = img.naturalHeight / img.naturalWidth;
    setContainerHeight(Math.round(img.clientWidth * ratio / 2));
  }, []);

  useEffect(() => {
    window.addEventListener('resize', measureHalf);
    return () => window.removeEventListener('resize', measureHalf);
  }, [measureHalf]);
  
  return (
    <section
      className={`h-screen lg:min-h-screen w-full relative overflow-hidden flex flex-col transition-colors duration-700 ${
        isCaregiver
          ? 'bg-[#1B2E27]'
          : 'bg-surface'
      }`}
    >
      {/* Background gradient orbs - role specific */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className={`absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full blur-[120px] translate-x-1/3 transition-colors duration-700 ${
            isCaregiver 
              ? 'bg-[#3F8F6B]/20' 
              : 'bg-accent-gold/10'
          }`} 
          aria-hidden="true"
          animate={{ 
            scale: isCaregiver ? [1, 1.1, 1] : [1, 1.05, 1],
            opacity: isCaregiver ? 0.6 : 0.5
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className={`absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3 transition-colors duration-700 ${
            isCaregiver 
              ? 'bg-[#2F4A3F]/30' 
              : 'bg-primary/8'
          }`} 
          aria-hidden="true"
          animate={{ 
            scale: isCaregiver ? [1, 1.15, 1] : [1, 1.08, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>
      
      {/* Navigation */}
      <Navbar activeRole={activeRole} onRoleChange={onRoleChange} isDark={isCaregiver} />
      {/* Spacer for always-fixed navbar */}
      <div className="h-[72px] shrink-0" aria-hidden="true" />

      {/* Mobile Hero Image — top 40% crop, above title */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeRole}
          ref={containerRef}
          className="lg:hidden flex-shrink-0 overflow-hidden relative mx-auto rounded-2xl"
          style={{ height: containerHeight ? `${containerHeight}px` : 'calc((100vh - 72px) * 0.38)', width: '72%' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          aria-hidden="true"
        >
          <img
            src={heroPhone[activeRole].src}
            alt=""
            className="absolute top-0 left-0 w-full h-auto"
            onLoad={measureHalf}
          />
          {/* Bottom fade into background */}
          <div
            className={`absolute bottom-0 left-0 right-0 h-1/2 transition-colors duration-700 ${
              isCaregiver
                ? 'bg-gradient-to-t from-[#1B2E27] via-[#1B2E27]/60 to-transparent'
                : 'bg-gradient-to-t from-surface via-surface/60 to-transparent'
            }`}
          />
        </motion.div>
      </AnimatePresence>

      {/* Hero Content */}
      <div className="flex-1 flex items-center min-h-0 overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-0">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-0">
            
            {/* Left Column - Copy */}
            <div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeRole}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                >

                  {/* Headline */}
                  <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-[family-name:var(--font-family-heading)] mb-4 sm:mb-6 transition-colors duration-500 ${
                    isCaregiver ? 'text-white' : 'text-text-primary'
                  }`}>
                    {content.headline}
                  </h1>

                  {/* Subtitle */}
                  <p className={`text-base sm:text-lg max-w-lg leading-relaxed mb-6 sm:mb-8 transition-colors duration-500 ${
                    isCaregiver ? 'text-white/70' : 'text-text-secondary'
                  }`}>
                    {content.subheadline}
                  </p>

                  {/* CTA Buttons - role colored */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
                    <motion.div
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link
                        to="/download"
                        className={`group px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-500 flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                          isCaregiver
                            ? 'bg-white text-[#1B2E27] hover:bg-white/90 shadow-lg shadow-white/20 hover:shadow-xl hover:shadow-white/30 focus-visible:ring-white focus-visible:ring-offset-[#1B2E27]'
                            : 'bg-primary text-surface hover:bg-primary-dark shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 focus-visible:ring-primary'
                        }`}
                        aria-label="Pobierz aplikację Pillo za darmo"
                      >
                        <Smartphone size={20} aria-hidden="true" />
                        {content.ctaPrimary}
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                      </Link>
                    </motion.div>
                    <a
                      href="#jak-to-dziala"
                      onClick={(e) => {
                        e.preventDefault();
                        const target = document.getElementById('jak-to-dziala');
                        if (!target) return;
                        const html = document.documentElement;
                        html.style.scrollBehavior = 'auto';
                        const start = window.scrollY;
                        const navbarHeight = 72;
                        const end = target.getBoundingClientRect().top + start - navbarHeight;
                        const duration = 1400;
                        const startTime = performance.now();
                        const ease = (t) => t < 0.5 ? 4*t*t*t : 1 - Math.pow(-2*t + 2, 3) / 2;
                        const step = (now) => {
                          const elapsed = now - startTime;
                          const progress = Math.min(elapsed / duration, 1);
                          window.scrollTo(0, start + (end - start) * ease(progress));
                          if (progress < 1) {
                            requestAnimationFrame(step);
                          } else {
                            html.style.scrollBehavior = '';
                          }
                        };
                        requestAnimationFrame(step);
                      }}
                      className={`px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold text-base sm:text-lg border-2 transition-all duration-500 text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                        isCaregiver
                          ? 'bg-transparent text-white border-white/30 hover:border-white/60 hover:bg-white/10 focus-visible:ring-white focus-visible:ring-offset-[#1B2E27]'
                          : 'bg-surface text-text-primary border-divider hover:border-primary-light hover:bg-surface focus-visible:ring-primary'
                      }`}
                      aria-label="Zobacz jak działa aplikacja"
                    >
                      {content.ctaSecondary}
                    </a>
                  </div>

                  {/* Trust note */}
                  <p className={`text-sm mb-8 transition-colors duration-500 ${
                    isCaregiver ? 'text-white/50' : 'text-text-secondary'
                  }`}>
                    {content.trustNote}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Trust badges — outside AnimatePresence so they fade in once and don't re-animate on role switch */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.9 }}
                className="flex items-center gap-6 flex-wrap"
              >
                <div className="flex items-center gap-2">
                  <ShieldCheck size={18} className={`transition-colors duration-500 ${
                    isCaregiver ? 'text-white' : 'text-success'
                  }`} aria-hidden="true" />
                  <span className={`text-sm transition-colors duration-500 ${
                    isCaregiver ? 'text-white/60' : 'text-text-secondary'
                  }`}>Bezpieczne dane</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex" aria-label="Ocena 4.9 na 5 gwiazdek">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        aria-hidden="true"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                      >
                        <Star size={16} fill="currentColor" className={`transition-colors duration-500 ${
                          isCaregiver ? 'text-[#E8C27A]' : 'text-accent-gold'
                        }`} />
                      </motion.div>
                    ))}
                  </div>
                  <span className={`text-sm transition-colors duration-500 ${
                    isCaregiver ? 'text-white/60' : 'text-text-secondary'
                  }`}>4.9/5 ocena</span>
                </div>
              </motion.div>
            </div>
            
            {/* Right Column - Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="hidden lg:flex relative items-center justify-center lg:justify-end h-full"
            >
              {/* Glow effect behind image - role specific */}
              <motion.div 
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[100px] transition-colors duration-700 ${
                  isCaregiver 
                    ? 'bg-[#3F8F6B]/20' 
                    : 'bg-accent-gold/20'
                }`} 
                aria-hidden="true"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.6, 0.8, 0.6]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Hero Image with float animation */}
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeRole}
                  className="animate-float"
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -20 }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                >
                  <img
                    src={heroPhone[activeRole].src}
                    alt={heroPhone[activeRole].alt}
                    className="relative z-10 max-h-[70vh] w-auto object-contain drop-shadow-2xl"
                  />
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Role indicator line at bottom */}
      <motion.div 
        className={`absolute bottom-0 left-0 right-0 h-1 transition-colors duration-700 ${
          isCaregiver ? 'bg-[#3F8F6B]' : 'bg-primary'
        }`}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      />
    </section>
  );
};

export default HeroSection;
