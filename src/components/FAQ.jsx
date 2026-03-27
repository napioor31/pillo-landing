import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const FAQ = ({ activeRole = 'patient', faqs = [] }) => {
  const isCaregiver = activeRole === 'caregiver';
  const [openIndex, setOpenIndex] = useState(null);
  const { t } = useTranslation();

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`w-full py-14 sm:py-24 relative overflow-hidden transition-colors duration-700 ${
      isCaregiver ? 'bg-[#243D34]' : 'bg-surface'
    }`}>
      <div className="absolute inset-0">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[120px] transition-colors duration-700 ${
          isCaregiver ? 'bg-[#3F8F6B]/20' : 'bg-primary/5'
        }`} aria-hidden="true" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 transition-colors duration-500 ${
            isCaregiver ? 'bg-[#3F8F6B]/20 text-[#5DB38D]' : 'bg-primary/10 text-primary'
          }`}>
            {t('faq.badge')}
          </span>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-[family-name:var(--font-family-heading)] transition-colors duration-500 ${
            isCaregiver ? 'text-white' : 'text-text-primary'
          }`}>
            {t('faq.heading')}
          </h2>
          <p className={`text-lg max-w-2xl mx-auto transition-colors duration-500 ${
            isCaregiver ? 'text-white/70' : 'text-text-secondary'
          }`}>
            {t('faq.subheading')}
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <div className={`rounded-2xl border overflow-hidden transition-all duration-500 ${
                isCaregiver
                  ? 'bg-[#1B2E27]/80 border-[#3F8F6B]/30'
                  : 'bg-surface-alt border-divider/50'
              }`}>
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset ${
                    isCaregiver
                      ? 'hover:bg-[#1B2E27] focus-visible:ring-[#3F8F6B]'
                      : 'hover:bg-surface/50 focus-visible:ring-primary'
                  }`}
                  aria-expanded={openIndex === index}
                >
                  <span className={`font-semibold pr-4 transition-colors duration-500 ${
                    isCaregiver ? 'text-white' : 'text-text-primary'
                  }`}>{faq.question}</span>
                  <ChevronDown
                    size={20}
                    className={`transition-all duration-300 flex-shrink-0 ${
                      isCaregiver ? 'text-[#5DB38D]' : 'text-primary'
                    } ${openIndex === index ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  />
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className={`px-4 sm:px-6 pb-4 sm:pb-5 leading-relaxed transition-colors duration-500 ${
                        isCaregiver ? 'text-white/70' : 'text-text-secondary'
                      }`}>
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className={`mb-4 transition-colors duration-500 ${
            isCaregiver ? 'text-white/70' : 'text-text-secondary'
          }`}>{t('faq.contactPrompt')}</p>
          <Link
            to="/contact"
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 ${
              isCaregiver
                ? 'bg-[#3F8F6B]/20 text-[#5DB38D] hover:bg-[#3F8F6B]/30 focus-visible:ring-[#3F8F6B]'
                : 'bg-primary/10 text-primary hover:bg-primary/20 focus-visible:ring-primary'
            }`}
          >
            <MessageCircle size={16} aria-hidden="true" />
            {t('faq.contactCta')}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
