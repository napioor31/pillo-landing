import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ShieldCheck, Star, CheckCircle2, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useOrphanT } from '../hooks/useOrphanT';
import Navbar from './Navbar';
import { getHeroPhone } from '../assets/images';
import { useWaitlistForm } from '../hooks/useWaitlistForm';

const HeroSection = ({ activeRole, onRoleChange, content, loaderDone = true }) => {
  const isCaregiver = activeRole === 'caregiver';
  const { t, i18n } = useOrphanT();
  const heroImage = getHeroPhone(activeRole, i18n.resolvedLanguage ?? i18n.language);
  const { email, setEmail, status, errorMsg, handleSubmit, handleKeyDown } = useWaitlistForm();
  
  return (
    <section
      className={`lg:min-h-screen w-full relative overflow-hidden flex flex-col transition-colors duration-700 ${
        isCaregiver
          ? 'bg-[#1B2E27]'
          : 'bg-surface'
      }`}
    >
      {/* Background gradient orbs - role specific, desktop only so mobile has flat solid bg */}
      <div className="hidden lg:block absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`animate-orb-slow absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full blur-[120px] translate-x-1/3 transition-colors duration-700 ${
            isCaregiver
              ? 'bg-[#3F8F6B]/20'
              : 'bg-accent-gold/10'
          }`}
          aria-hidden="true"
        />
        <div
          className={`animate-orb-slower absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3 transition-colors duration-700 ${
            isCaregiver
              ? 'bg-[#2F4A3F]/30'
              : 'bg-primary/8'
          }`}
          aria-hidden="true"
        />
      </div>
      
      {/* Navigation */}
      <Navbar activeRole={activeRole} onRoleChange={onRoleChange} isDark={isCaregiver} />
      {/* Spacer for always-fixed navbar */}
      <div className="h-[72px] shrink-0" aria-hidden="true" />

      {/* Mobile Hero Image — top portion of phone, above content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeRole}
          className={`lg:hidden flex-shrink-0 overflow-hidden relative mx-auto rounded-2xl w-[55%] sm:w-[40%] max-h-[38vh] min-[480px]:max-h-[50vh] sm:max-h-[40vh] ${isCaregiver ? 'bg-[#1B2E27]' : 'bg-surface'}`}
          initial={{ opacity: 0, y: 20 }}
          animate={loaderDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          aria-hidden="true"
        >
          <img
            src={heroImage.src}
            alt=""
            width={390}
            height={844}
            className="w-full h-auto"
          />
          {/* Bottom fade into background */}
          <div
            className="absolute bottom-0 left-0 right-0 h-2/3 transition-colors duration-700"
            style={{
              background: isCaregiver
                ? 'linear-gradient(to top, #1B2E27 0%, rgba(27,46,39,0.85) 40%, rgba(27,46,39,0.4) 70%, transparent 100%)'
                : 'linear-gradient(to top, #FAF7F3 0%, rgba(250,247,243,0.85) 40%, rgba(250,247,243,0.4) 70%, transparent 100%)'
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Hero Content */}
      <div className="flex-1 lg:flex lg:items-center min-h-0">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 pb-8 sm:pb-10 lg:py-0">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-0">
            
            {/* Left Column - Copy */}
            <div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeRole}
                  initial={{ opacity: 0, x: -30 }}
                  animate={loaderDone ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                >

                  {/* Headline */}
                  <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-[family-name:var(--font-family-heading)] mb-3 sm:mb-6 transition-colors duration-500 ${
                    isCaregiver ? 'text-white' : 'text-text-primary'
                  }`}>
                    {content.headline}
                  </h1>

                  {/* Subtitle */}
                  <p className={`text-base sm:text-lg max-w-lg leading-relaxed mb-4 sm:mb-8 transition-colors duration-500 ${
                    isCaregiver ? 'text-white/70' : 'text-text-secondary'
                  }`}>
                    {content.subheadline}
                  </p>

                  {/* Email signup form */}
                  <div className="mb-3 sm:mb-5">
                    {status === 'success' ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.92, y: 8 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className={`inline-flex items-center gap-3 px-5 py-3.5 rounded-2xl border ${
                          isCaregiver
                            ? 'bg-white/10 border-white/20 text-white'
                            : 'bg-primary/8 border-primary/20 text-primary'
                        }`}
                      >
                        <CheckCircle2 size={22} className="shrink-0" aria-hidden="true" />
                        <span className="text-base font-semibold">{t('waitlist.success')}</span>
                      </motion.div>
                    ) : status === 'duplicate' ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.92, y: 8 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className={`inline-flex items-center gap-3 px-5 py-3.5 rounded-2xl border ${
                          isCaregiver
                            ? 'bg-white/10 border-white/20 text-white'
                            : 'bg-accent-gold/10 border-accent-gold/30 text-text-primary'
                        }`}
                      >
                        <Info size={22} className="shrink-0" aria-hidden="true" />
                        <span className="text-base font-semibold">{t('waitlist.duplicate')}</span>
                      </motion.div>
                    ) : (
                      <>
                        <div className="flex flex-col sm:flex-row gap-2 max-w-xl">
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder={t('waitlist.emailPlaceholder')}
                            disabled={status === 'submitting'}
                            className={`flex-1 min-w-0 px-5 py-3.5 rounded-full text-base border-2 outline-none focus:ring-2 focus:ring-offset-0 transition-all duration-300 disabled:opacity-60 ${
                              isCaregiver
                                ? 'bg-white/10 text-white placeholder-white/40 border-white/20 focus:border-white/40 focus:ring-white/10'
                                : 'bg-white text-text-primary placeholder-text-secondary/50 border-divider focus:border-primary/40 focus:ring-primary/10'
                            }`}
                          />
                          <motion.button
                            type="button"
                            onClick={handleSubmit}
                            disabled={status === 'submitting'}
                            whileHover={status !== 'submitting' ? { y: -2 } : {}}
                            whileTap={status !== 'submitting' ? { scale: 0.98 } : {}}
                            className={`px-5 py-3.5 rounded-full font-semibold text-base transition-all duration-500 flex items-center justify-center gap-2 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed ${
                              isCaregiver
                                ? 'bg-white text-[#1B2E27] hover:bg-white/90 shadow-lg shadow-white/20 hover:shadow-xl hover:shadow-white/30 focus-visible:ring-white focus-visible:ring-offset-[#1B2E27]'
                                : 'bg-primary text-surface hover:bg-primary-dark shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 focus-visible:ring-primary'
                            }`}
                          >
                            {status === 'submitting' ? t('waitlist.submitting') : t('waitlist.cta')}
                            {status !== 'submitting' && <ArrowRight size={18} aria-hidden="true" />}
                          </motion.button>
                        </div>
                        {status === 'error' ? (
                          <div className="mt-2.5">
                            <p className="text-sm text-red-500">{errorMsg}</p>
                            <Link
                              to="/contact"
                              className={`mt-1 inline-block text-sm underline underline-offset-2 transition-colors ${
                                isCaregiver ? 'text-white/60 hover:text-white' : 'text-text-secondary hover:text-primary'
                              }`}
                            >
                              {t('waitlist.errorContact')}
                            </Link>
                          </div>
                        ) : (
                          <p className={`mt-2.5 text-sm transition-colors duration-500 ${
                            isCaregiver ? 'text-white/40' : 'text-text-secondary/70'
                          }`}>
                            {t('waitlist.trust')}
                          </p>
                        )}
                      </>
                    )}
                  </div>

                </motion.div>
              </AnimatePresence>

              {/* Trust badges — outside AnimatePresence so they fade in once and don't re-animate on role switch */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={loaderDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                transition={{ duration: 0.4, delay: loaderDone ? 0.3 : 0 }}
                className="flex items-center gap-6 flex-wrap"
              >
                <div className="flex items-center gap-2">
                  <ShieldCheck size={18} className={`transition-colors duration-500 ${
                    isCaregiver ? 'text-white' : 'text-success'
                  }`} aria-hidden="true" />
                  <span className={`text-sm transition-colors duration-500 ${
                    isCaregiver ? 'text-white/60' : 'text-text-secondary'
                  }`}>{t('hero.secureBadge')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex" aria-label={t('hero.ratingAriaLabel')}>
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        aria-hidden="true"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={loaderDone ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        transition={{ delay: loaderDone ? 0.4 + i * 0.08 : 0 }}
                      >
                        <Star size={16} fill="currentColor" className={`transition-colors duration-500 ${
                          isCaregiver ? 'text-[#E8C27A]' : 'text-accent-gold'
                        }`} />
                      </motion.div>
                    ))}
                  </div>
                  <span className={`text-sm transition-colors duration-500 ${
                    isCaregiver ? 'text-white/60' : 'text-text-secondary'
                  }`}>{t('hero.ratingBadge')}</span>
                </div>
              </motion.div>
            </div>
            
            {/* Right Column - Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={loaderDone ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
              className="hidden lg:flex relative items-center justify-center lg:justify-end h-full"
            >
              {/* Glow effect behind image - role specific */}
              <div
                className={`animate-orb-slow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[100px] transition-colors duration-700 ${
                  isCaregiver
                    ? 'bg-[#3F8F6B]/20'
                    : 'bg-accent-gold/20'
                }`}
                aria-hidden="true"
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
                    src={heroImage.src}
                    alt={heroImage.alt}
                    width={390}
                    height={844}
                    fetchPriority="high"
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
        animate={loaderDone ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
    </section>
  );
};

export default HeroSection;
