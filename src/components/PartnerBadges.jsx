import { motion } from 'framer-motion';

const partners = [
  { icon: 'fi fi-brands-apple', name: 'Apple Health' },
  { icon: 'fi fi-rr-heart', name: 'Polskie Towarzystwo Kardiologiczne' },
  { icon: 'fi fi-rr-shield-check', name: 'NFZ' },
  { icon: 'fi fi-rr-smartphone', name: 'Google Health' }
];

const PartnerBadges = ({ activeRole = 'patient' }) => {
  const isCaregiver = activeRole === 'caregiver';
  
  return (
    <section className={`w-full py-12 border-y transition-colors duration-700 ${
      isCaregiver 
        ? 'bg-surface border-[#3F8F6B]/20' 
        : 'bg-surface-alt border-divider/50'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <p className={`text-center text-sm mb-8 transition-colors duration-500 text-text-secondary`}>Zaufali nam</p>
        
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex items-center gap-3 transition-colors duration-500 ${
                isCaregiver 
                  ? 'text-[#3F8F6B]/60 hover:text-[#3F8F6B]' 
                  : 'text-text-secondary/60 hover:text-text-secondary'
              }`}
            >
              <i className={`${partner.icon} text-2xl`} aria-hidden="true"></i>
              <span className="font-medium">{partner.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerBadges;
