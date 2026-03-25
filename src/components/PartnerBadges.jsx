import { motion } from 'framer-motion';
import { Apple, Heart, ShieldCheck, Smartphone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const partners = [
  { Icon: Apple, name: 'Apple Health' },
  { Icon: Heart, name: 'Polskie Towarzystwo Kardiologiczne' },
  { Icon: ShieldCheck, name: 'NFZ' },
  { Icon: Smartphone, name: 'Google Health' }
];

const PartnerBadges = ({ activeRole = 'patient' }) => {
  const isCaregiver = activeRole === 'caregiver';
  const { t } = useTranslation();

  return (
    <section className={`w-full py-12 border-y transition-colors duration-700 ${
      isCaregiver
        ? 'bg-surface border-[#3F8F6B]/20'
        : 'bg-surface-alt border-divider/50'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <p className={`text-center text-sm mb-8 transition-colors duration-500 text-text-secondary`}>{t('partners.trustedBy')}</p>

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
              <partner.Icon size={24} aria-hidden="true" />
              <span className="font-medium">{partner.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerBadges;
