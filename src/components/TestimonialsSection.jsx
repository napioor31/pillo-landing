import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { useOrphanT } from '../hooks/useOrphanT';

function pickRandom(arr, n) {
  return [...arr].sort(() => Math.random() - 0.5).slice(0, n);
}

const PATIENT_AVATARS = {
  'Krystyna Wójcik':    '/images/pacjenci-webp/krystyna-wojcik.webp',
  'Stanisław Marek':    '/images/pacjenci-webp/stanislaw-marek.webp',
  'Irena Kowalczyk':    '/images/pacjenci-webp/irena-kowalczyk.webp',
  'Halina Brzezińska':  '/images/pacjenci-webp/halina-brzezinska.webp',
  'Franz Huber':        '/images/pacjenci-webp/franz-huber.webp',
  'Ryszard Dąbrowski':  '/images/pacjenci-webp/ryszard-dabrowski.webp',
  'Elżbieta Kamińska':  '/images/pacjenci-webp/elzbieta-kaminska.webp',
  'Marta Lewandowska':  '/images/pacjenci-webp/marta-lewandowska.webp',
  'Bogdan Wiśniewski':  '/images/pacjenci-webp/bogdan-wisniewski.webp',
  'Zofia Adamska':      '/images/pacjenci-webp/zofia-adamska.webp',
};

const CAREGIVER_AVATARS = {
  'Agnieszka Zielińska': '/images/opiekun-webp/agnieszka-zielinska.webp',
  'Piotr Kowalski':      '/images/opiekun-webp/piotr-kowalski.webp',
  'Katarzyna Nowak':     '/images/opiekun-webp/katarzyna-nowak.webp',
  'Dorota Wiśniewska':   '/images/opiekun-webp/dorota-wisniewska.webp',
  'Marek Jankowski':     '/images/opiekun-webp/marek-jankowski.webp',
  'Tomasz Krawczyk':     '/images/opiekun-webp/tomasz-krawczyk.webp',
  'Joanna Piotrowska':   '/images/opiekun-webp/joanna-piotrowska.webp',
  'Anna Wojciechowska':  '/images/opiekun-webp/anna-wojciechowska.webp',
  'Michał Szymański':    '/images/opiekun-webp/michal-szymanski.webp',
  'Beata Mazur':         '/images/opiekun-webp/beata-mazur.webp',
};

const TestimonialsSection = ({ activeRole = 'patient', testimonials = [] }) => {
  const isCaregiver = activeRole === 'caregiver';
  const { t, i18n } = useOrphanT();

  const [displayed, setDisplayed] = useState(() => pickRandom(testimonials, 3));

  useEffect(() => {
    setDisplayed(pickRandom(testimonials, 3));
  }, [activeRole, i18n.language]);

  return (
    <section className={`w-full py-14 sm:py-24 relative overflow-hidden transition-colors duration-700 ${
      isCaregiver ? 'bg-surface' : 'bg-[#243D34]'
    }`}>
      <div className="absolute inset-0">
        <div className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl translate-x-1/2 transition-colors duration-700 ${
          isCaregiver ? 'bg-[#3F8F6B]/10' : 'bg-primary/20'
        }`} aria-hidden="true" />
        <div className={`absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl -translate-x-1/2 transition-colors duration-700 ${
          isCaregiver ? 'bg-[#3F8F6B]/10' : 'bg-primary/20'
        }`} aria-hidden="true" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-16"
        >
          <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 transition-colors duration-500 ${
            isCaregiver ? 'bg-[#3F8F6B]/10 text-[#3F8F6B]' : 'bg-white/10 text-white/80'
          }`}>
            {t('testimonials.badge')}
          </span>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-[family-name:var(--font-family-heading)] transition-colors duration-500 ${
            isCaregiver ? 'text-text-primary' : 'text-white'
          }`}>
            {t('testimonials.heading')}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 pt-4">
          {displayed.map((testimonial, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`rounded-3xl p-5 sm:p-8 border h-full transition-all duration-500 ${
                isCaregiver
                  ? 'bg-surface-alt border-[#3F8F6B]/20'
                  : 'bg-[#1B2E27]/80 border-white/10'
              }`}>
                <div className={`absolute -top-4 left-8 w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-500 ${
                  isCaregiver ? 'bg-[#3F8F6B]' : 'bg-accent-gold'
                }`}>
                  <Quote size={14} className={`${
                    isCaregiver ? 'text-white' : 'text-[#1B2E27]'
                  }`} aria-hidden="true" />
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" className={`transition-colors duration-500 ${
                      isCaregiver ? 'text-[#3F8F6B]' : 'text-accent-gold'
                    }`} aria-hidden="true" />
                  ))}
                </div>

                <p className={`leading-relaxed mb-6 transition-colors duration-500 ${
                  isCaregiver ? 'text-text-primary' : 'text-white/90'
                }`}>
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-full overflow-hidden flex items-center justify-center flex-shrink-0 transition-colors duration-500 ${
                    isCaregiver ? 'bg-[#3F8F6B]/10' : 'bg-accent-gold/10'
                  }`}>
                    {(() => {
                      const avatar = isCaregiver
                        ? CAREGIVER_AVATARS[testimonial.author]
                        : PATIENT_AVATARS[testimonial.author];
                      return avatar ? (
                        <img
                          src={avatar}
                          alt={testimonial.author}
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className={`font-semibold transition-colors duration-500 ${
                          isCaregiver ? 'text-[#3F8F6B]' : 'text-accent-gold'
                        }`}>
                          {testimonial.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      );
                    })()}
                  </div>
                  <div>
                    <p className={`font-semibold transition-colors duration-500 ${
                      isCaregiver ? 'text-text-primary' : 'text-white'
                    }`}>{testimonial.author}</p>
                    <p className={`text-sm transition-colors duration-500 ${
                      isCaregiver ? 'text-text-secondary' : 'text-white/60'
                    }`}>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
