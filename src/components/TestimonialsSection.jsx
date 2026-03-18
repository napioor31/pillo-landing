import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const TestimonialsSection = ({ activeRole = 'patient', testimonials = [] }) => {
  const isCaregiver = activeRole === 'caregiver';

  return (
    <section className={`w-full py-14 sm:py-24 relative overflow-hidden transition-colors duration-700 ${
      isCaregiver ? 'bg-surface' : 'bg-[#243D34]'
    }`}>
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl translate-x-1/2 transition-colors duration-700 ${
          isCaregiver ? 'bg-[#3F8F6B]/10' : 'bg-primary/20'
        }`} aria-hidden="true" />
        <div className={`absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl -translate-x-1/2 transition-colors duration-700 ${
          isCaregiver ? 'bg-[#3F8F6B]/10' : 'bg-primary/20'
        }`} aria-hidden="true" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-16"
        >
          <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 transition-colors duration-500 ${
            isCaregiver ? 'bg-[#3F8F6B]/10 text-[#3F8F6B]' : 'bg-white/10 text-white/80'
          }`}>
            Opinie
          </span>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-[family-name:var(--font-family-heading)] transition-colors duration-500 ${
            isCaregiver ? 'text-text-primary' : 'text-white'
          }`}>
            Co mówią o nas użytkownicy
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-3xl p-8 border relative transition-all duration-500 ${
                isCaregiver
                  ? 'bg-surface-alt border-[#3F8F6B]/20'
                  : 'bg-[#1B2E27]/80 border-white/10'
              }`}
            >
              {/* Quote Icon */}
              <div className={`absolute -top-4 left-8 w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-500 ${
                isCaregiver ? 'bg-[#3F8F6B]' : 'bg-accent-gold'
              }`}>
                <Quote size={14} className={`${
                  isCaregiver ? 'text-white' : 'text-[#1B2E27]'
                }`} aria-hidden="true" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className={`transition-colors duration-500 ${
                    isCaregiver ? 'text-[#3F8F6B]' : 'text-accent-gold'
                  }`} aria-hidden="true" />
                ))}
              </div>

              {/* Quote */}
              <p className={`leading-relaxed mb-6 transition-colors duration-500 ${
                isCaregiver ? 'text-text-primary' : 'text-white/90'
              }`}>
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-500 ${
                  isCaregiver ? 'bg-[#3F8F6B]/10' : 'bg-accent-gold/10'
                }`}>
                  <span className={`font-semibold transition-colors duration-500 ${
                    isCaregiver ? 'text-[#3F8F6B]' : 'text-accent-gold'
                  }`}>
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </span>
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
