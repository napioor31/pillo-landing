import { motion } from 'framer-motion';
import { User, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const RoleSwitcher = ({ activeRole, onRoleChange, isDark = false }) => {
  const { t } = useTranslation();

  const roles = [
    { key: 'patient',   Icon: User,  labelShort: t('roles.patientShort'),  labelFull: t('roles.patientFull') },
    { key: 'caregiver', Icon: Users, labelShort: t('roles.caregiverShort'), labelFull: t('roles.caregiverFull') },
  ];

  return (
    <motion.div
      className={`flex items-center rounded-full p-1.5 border shadow-sm transition-colors duration-500 ${
        isDark
          ? 'bg-[#2F4A3F]/50 border-[#3F8F6B]/30'
          : 'bg-surface-alt border-divider'
      }`}
      role="group"
      aria-label={t('roles.ariaLabel')}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {roles.map(({ key, Icon, labelShort, labelFull }) => {
        const isActive = activeRole === key;
        const pillColor = key === 'patient'
          ? (isDark ? 'bg-white' : 'bg-[#2F4A3F]')
          : (isDark ? 'bg-white' : 'bg-[#3F8F6B]');

        return (
          <button
            key={key}
            onClick={() => onRoleChange(key)}
            aria-pressed={isActive}
            aria-label={labelFull}
            className={`relative flex items-center justify-center gap-2 rounded-full font-semibold text-sm transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 cursor-pointer
              px-4 py-2 sm:px-5 sm:py-2.5
              ${isActive
                ? isDark
                  ? 'text-[#1B2E27] focus-visible:ring-white'
                  : 'text-white focus-visible:ring-primary'
                : isDark
                  ? 'text-white/60 hover:text-white focus-visible:ring-white'
                  : 'text-text-secondary hover:text-text-primary focus-visible:ring-primary'
              }`}
          >
            {/* Pill sits behind content, fills the button exactly */}
            {isActive && (
              <motion.span
                layoutId="role-pill"
                className={`absolute inset-0 rounded-full ${pillColor}`}
                transition={{ type: 'spring', stiffness: 400, damping: 30, mass: 0.8 }}
              />
            )}
            <motion.span
              className="relative z-10 flex items-center justify-center sm:hidden"
              animate={{ scale: isActive ? 1.1 : 1 }}
              transition={{ duration: 0.25 }}
            >
              <span className="whitespace-nowrap text-sm font-semibold">{labelShort}</span>
            </motion.span>
            <motion.span
              className="relative z-10 hidden sm:flex items-center gap-2"
              animate={{ scale: isActive ? 1.1 : 1 }}
              transition={{ duration: 0.25 }}
            >
              <Icon size={16} aria-hidden="true" />
              <span className="whitespace-nowrap">{labelFull}</span>
            </motion.span>
          </button>
        );
      })}
    </motion.div>
  );
};

export default RoleSwitcher;
