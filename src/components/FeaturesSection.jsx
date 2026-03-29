import { Bell, CheckCircle, Type, Volume2, Users, ShieldCheck, BarChart3, History, BellRing, MessageCircle } from 'lucide-react';
import { useOrphanT } from '../hooks/useOrphanT';

const iconMap = {
  Bell,
  CheckCircle,
  Type,
  Volume2,
  Users,
  Shield: ShieldCheck,
  BarChart3,
  History,
  BellRing,
  MessageCircle
};

const FeaturesSection = ({ activeRole, features }) => {
  const isCaregiver = activeRole === 'caregiver';
  const { t } = useOrphanT();

  return (
    <section id="features" className={`w-full py-14 sm:py-24 relative overflow-hidden transition-colors duration-700 ${
      isCaregiver ? 'bg-[#243D34]' : 'bg-surface'
    }`}>
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className={`absolute top-1/2 left-0 w-96 h-96 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 transition-colors duration-700 ${
          isCaregiver ? 'bg-[#3F8F6B]/10' : 'bg-primary/5'
        }`} aria-hidden="true" />
        <div className={`absolute top-1/4 right-0 w-96 h-96 rounded-full blur-3xl translate-x-1/2 transition-colors duration-700 ${
          isCaregiver ? 'bg-[#1B2E27]/10' : 'bg-accent-gold/10'
        }`} aria-hidden="true" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 transition-colors duration-500 ${
            isCaregiver ? 'bg-[#3F8F6B]/10 text-[#3F8F6B]' : 'bg-primary/10 text-primary'
          }`}>
            {t('features.badge')}
          </span>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-[family-name:var(--font-family-heading)] transition-colors duration-500 ${
            isCaregiver ? 'text-white' : 'text-text-primary'
          }`}>
            {t('features.heading')}
            <span className={`block transition-colors duration-500 ${
              isCaregiver ? 'text-[#3F8F6B]' : 'text-primary'
            }`}>{t('features.headingSub')}</span>
          </h2>
          <p className={`text-lg transition-colors duration-500 ${
            isCaregiver ? 'text-white/70' : 'text-text-secondary'
          }`}>
            {activeRole === 'patient' ? t('features.descPatient') : t('features.descCaregiver')}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon];
            const hasImage = !!feature.image;
            return (
              <div
                key={index}
                className={`group rounded-[32px] border transition-all duration-500 hover:-translate-y-1 overflow-hidden flex flex-col ${
                  isCaregiver
                    ? 'bg-[#1B2E27]/80 border-[#3F8F6B]/30 hover:border-[#3F8F6B]/50'
                    : 'bg-surface-alt border-divider/50 hover:border-primary-light/30 hover:shadow-xl hover:shadow-primary/8'
                }`}
              >
                {/* Image area */}
                {hasImage && (
                  <div className={`relative overflow-hidden aspect-square ${
                    isCaregiver ? 'bg-[#243D34]' : 'bg-primary/5'
                  }`}>
                    <img
                      src={feature.image}
                      alt={feature.title}
                      loading="lazy"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                    {/* Gradient fade at bottom */}
                    <div className={`absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t ${
                      isCaregiver ? 'from-[#1B2E27]' : 'from-surface-alt'
                    } to-transparent`} />
                  </div>
                )}

                {/* Content */}
                <div className="p-5 sm:p-7 flex flex-col flex-1">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 ${
                    isCaregiver ? 'bg-[#3F8F6B]/20' : 'bg-primary/10'
                  }`}>
                    {IconComponent && (
                      <IconComponent size={20} className={`transition-colors duration-500 ${
                        isCaregiver ? 'text-[#5DB38D]' : 'text-primary'
                      }`} aria-hidden="true" />
                    )}
                  </div>

                  <h3 className={`text-xl font-bold mb-3 transition-colors duration-500 font-[family-name:var(--font-family-heading)] ${
                    isCaregiver ? 'text-white' : 'text-text-primary'
                  }`}>
                    {feature.title}
                  </h3>
                  <p className={`leading-relaxed transition-colors duration-500 ${
                    isCaregiver ? 'text-white/70' : 'text-text-secondary'
                  }`}>
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
