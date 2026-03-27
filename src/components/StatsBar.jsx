import { motion } from 'framer-motion';
import { Users, Star, ShieldCheck, Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const StatsBar = ({ activeRole = 'patient' }) => {
  const isCaregiver = activeRole === 'caregiver';
  const { t } = useTranslation();

  const stats = [
    { Icon: Users, value: '50K+', label: t('stats.activeUsers') },
    { Icon: Star, value: '4.9', label: t('stats.avgRating') },
    { Icon: ShieldCheck, value: '100%', label: t('stats.dataSecurity') },
    { Icon: Download, value: '100K+', label: t('stats.downloads') },
  ];

  return (
    <section className={`w-full py-16 relative overflow-hidden transition-colors duration-700 ${
      isCaregiver ? 'bg-surface' : 'bg-[#243D34]'
    }`}>
      {/* Background decoration */}
      <div className={`absolute inset-0 transition-colors duration-700 ${
        isCaregiver
          ? 'bg-gradient-to-b from-surface-alt to-transparent opacity-50'
          : 'bg-gradient-to-b from-[#1B2E27] to-transparent opacity-50'
      }`} aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="flex flex-col sm:flex-row items-center justify-center sm:gap-3 gap-1 mb-2">
                <stat.Icon size={24} className={`transition-colors duration-500 ${
                  isCaregiver ? 'text-[#3F8F6B]/80' : 'text-white/80'
                }`} aria-hidden="true" />
                <span className={`text-2xl sm:text-3xl md:text-4xl font-bold font-[family-name:var(--font-family-heading)] transition-colors duration-500 ${
                  isCaregiver ? 'text-[#1B2E27]' : 'text-white'
                }`}>
                  {stat.value}
                </span>
              </div>
              <p className={`text-sm transition-colors duration-500 ${
                isCaregiver ? 'text-text-secondary' : 'text-white/60'
              }`}>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
