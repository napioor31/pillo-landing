import { motion } from 'framer-motion';

const HowItWorksSection = ({ activeRole, content }) => {
  const isCaregiver = activeRole === 'caregiver';

  return (
    <section id="jak-to-dziala" className={`w-full py-14 sm:py-24 relative overflow-hidden transition-colors duration-700 ${
      isCaregiver ? 'bg-surface' : 'bg-[#243D34]'
    }`}>
      <div className="absolute inset-0">
        <div className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 transition-colors duration-700 ${
          isCaregiver ? 'bg-[#3F8F6B]/10' : 'bg-primary/20'
        }`} aria-hidden="true" />
        <div className={`absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 transition-colors duration-700 ${
          isCaregiver ? 'bg-[#3F8F6B]/10' : 'bg-primary/20'
        }`} aria-hidden="true" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
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
            {content.title}
          </span>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-[family-name:var(--font-family-heading)] transition-colors duration-500 ${
            isCaregiver ? 'text-text-primary' : 'text-white'
          }`}>
            {content.subtitle}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {content.steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative flex"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              {index < 2 && (
                <div className={`hidden md:block absolute top-12 left-1/2 w-full h-0.5 -translate-y-1/2 transition-colors duration-500 ${
                  isCaregiver ? 'bg-[#3F8F6B]/20' : 'bg-[#3F8F6B]/30'
                }`}>
                  <div className={`absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full transition-colors duration-500 ${
                    isCaregiver ? 'bg-[#3F8F6B]' : 'bg-[#3F8F6B]'
                  }`} />
                </div>
              )}

              <div className={`rounded-3xl p-8 border transition-all duration-500 relative z-10 w-full ${
                isCaregiver
                  ? 'bg-surface-alt border-[#3F8F6B]/20 hover:border-[#3F8F6B]/40 hover:shadow-lg hover:shadow-[#3F8F6B]/10'
                  : 'bg-surface-alt border-[#3F8F6B]/20 hover:border-[#3F8F6B]/40 hover:shadow-lg hover:shadow-[#3F8F6B]/10'
              }`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center transition-colors duration-500 ${
                    isCaregiver ? 'bg-[#3F8F6B]' : 'bg-primary'
                  }`}>
                    <span className="font-bold text-xl text-white">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold font-[family-name:var(--font-family-heading)] leading-tight text-text-primary">
                    {step.title}
                  </h3>
                </div>
                <p className="leading-relaxed text-text-secondary">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
