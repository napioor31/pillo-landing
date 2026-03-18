import { motion } from 'framer-motion';
import { User, Users } from 'lucide-react';

const RoleSwitcher = ({ activeRole, onRoleChange, isDark = false }) => {
  return (
    <motion.div 
      className={`flex items-center rounded-full p-1.5 border shadow-sm relative overflow-hidden transition-colors duration-500 ${
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
      {/* Animated background indicator */}
      <motion.div
        className={`absolute h-[calc(100%-12px)] rounded-full transition-colors duration-500 ${
          activeRole === 'patient'
            ? isDark ? 'bg-white' : 'bg-[#2F4A3F]'
            : isDark ? 'bg-white' : 'bg-[#3F8F6B]'
        }`}
        initial={false}
        animate={{
          x: activeRole === 'patient' ? 6 : 'calc(100% + 2px)',
          width: 'calc(50% - 4px)',
        }}
        transition={{ 
          type: "spring", 
          stiffness: 400, 
          damping: 30,
          mass: 0.8
        }}
        style={{ 
          left: 0,
          top: '6px',
        }}
      />
      
      <button
        onClick={() => onRoleChange('patient')}
        className={`relative px-5 py-2.5 rounded-full text-sm font-semibold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 z-10 ${
          activeRole === 'patient'
            ? isDark ? 'text-[#1B2E27] focus-visible:ring-white' : 'text-white focus-visible:ring-[#2F4A3F]'
            : isDark
              ? 'text-white/60 hover:text-white focus-visible:ring-white'
              : 'text-text-secondary hover:text-text-primary focus-visible:ring-primary'
        }`}
        aria-pressed={activeRole === 'patient'}
        aria-label="Pokaż funkcje dla pacjenta"
      >
        <span className="relative z-10 flex items-center gap-2">
          <motion.div
            animate={{
              scale: activeRole === 'patient' ? 1.1 : 1,
              rotate: activeRole === 'patient' ? [0, -5, 5, 0] : 0
            }}
            transition={{ duration: 0.3 }}
          >
            <User size={18} />
          </motion.div>
          Jestem pacjentem
        </span>
      </button>

      <button
        onClick={() => onRoleChange('caregiver')}
        className={`relative px-5 py-2.5 rounded-full text-sm font-semibold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 z-10 ${
          activeRole === 'caregiver'
            ? isDark ? 'text-[#1B2E27] focus-visible:ring-white' : 'text-white focus-visible:ring-[#3F8F6B]'
            : isDark
              ? 'text-white/60 hover:text-white focus-visible:ring-white'
              : 'text-text-secondary hover:text-text-primary focus-visible:ring-primary'
        }`}
        aria-pressed={activeRole === 'caregiver'}
        aria-label="Pokaż funkcje dla opiekuna"
      >
        <span className="relative z-10 flex items-center gap-2">
          <motion.div
            animate={{
              scale: activeRole === 'caregiver' ? 1.1 : 1,
              rotate: activeRole === 'caregiver' ? [0, 5, -5, 0] : 0
            }}
            transition={{ duration: 0.3 }}
          >
            <Users size={18} />
          </motion.div>
          Jestem opiekunem
        </span>
      </button>
    </motion.div>
  );
};

export default RoleSwitcher;
