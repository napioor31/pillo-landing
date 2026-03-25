import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Check } from 'lucide-react';

const LANGS = [
  { code: 'pl', label: 'Polski' },
  { code: 'en', label: 'English' },
  { code: 'de', label: 'Deutsch' },
];

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  const currentLang = LANGS.find(l => l.code === i18n.language) ?? LANGS[0];

  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    const handleEscape = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [open]);

  return (
    <div ref={containerRef} className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            aria-label={t('lang.switcherAriaLabel')}
            initial={{ opacity: 0, scale: 0.9, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 8 }}
            transition={{ duration: 0.15 }}
            className="bg-[#243D34] border border-[#3F8F6B]/30 rounded-2xl overflow-hidden shadow-xl min-w-[140px]"
          >
            {LANGS.map(lang => {
              const isActive = lang.code === i18n.language;
              return (
                <li
                  key={lang.code}
                  role="option"
                  aria-selected={isActive}
                  onClick={() => { i18n.changeLanguage(lang.code); setOpen(false); }}
                  className={`flex items-center justify-between gap-3 px-4 py-3 cursor-pointer text-sm font-medium transition-colors duration-150 ${
                    isActive
                      ? 'text-white bg-[#3F8F6B]/20'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{lang.label}</span>
                  {isActive && <Check size={14} aria-hidden="true" className="text-[#5DB38D]" />}
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen(v => !v)}
        aria-label={t('lang.switcherAriaLabel')}
        aria-expanded={open}
        aria-haspopup="listbox"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#243D34] text-white text-sm font-semibold shadow-xl border border-[#3F8F6B]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3F8F6B]"
      >
        <Globe size={15} aria-hidden="true" />
        {currentLang.code.toUpperCase()}
      </motion.button>
    </div>
  );
};

export default LanguageSwitcher;
