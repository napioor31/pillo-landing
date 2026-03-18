import { motion } from 'framer-motion';
import { User, Users } from 'lucide-react';

const roles = [
  { key: 'patient',   Icon: User,  labelFull: 'Jestem pacjentem' },
  { key: 'caregiver', Icon: Users, labelFull: 'Jestem opiekunem' },
];

const RoleSwitcher = ({ activeRole, onRoleChange, isDark = false }) => {
  return (
    <motion.div
      className={`flex items-center rounded-full p-1.5 border shadow-sm transition-colors duration-500 ${
        isDark
          ? 'bg-[#2F4A3F]/50 border-[#3F8F6B]/30'
          : 'bg-surface-alt border-divider'
      }`}
      role="group"
      aria-label="Wybierz perspektywę użytkownika"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {roles.map(({ key, Icon, labelFull }) => {
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
              p-2.5 sm:px-5 sm:py-2.5
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
              className="relative z-10 flex items-center justify-center"
              animate={{ scale: isActive ? 1.1 : 1 }}
              transition={{ duration: 0.25 }}
            >
              <Icon size={16} aria-hidden="true" />
            </motion.span>
            <span className="relative z-10 hidden sm:inline whitespace-nowrap">{labelFull}</span>
          </button>
        );
      })}
    </motion.div>
  );
};

export default RoleSwitcher;
