import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bell } from 'lucide-react';
import RoleSwitcher from './RoleSwitcher';
import { logo } from '../assets/images';

const Navbar = ({ activeRole, onRoleChange, isDark = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 w-full py-4 z-50 transition-all duration-500 ${
      isScrolled
        ? `shadow-sm ${isDark ? 'glass-effect-caregiver' : 'glass-effect'}`
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className={`flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:rounded-lg ${
          isDark ? 'focus-visible:ring-[#3F8F6B]' : 'focus-visible:ring-primary'
        }`}>
          <img
            src={logo.src}
            alt={logo.alt}
            width={40}
            height={40}
            className="h-10 w-auto rounded-xl"
          />
          <span className={`text-xl font-bold transition-colors duration-500 ${
            isDark && !isScrolled ? 'text-white' : 'text-gray-900'
          }`}>Pillo</span>
        </a>

        {/* Role Switcher */}
        <RoleSwitcher activeRole={activeRole} onRoleChange={onRoleChange} isDark={isDark && !isScrolled || isScrolled} />

        {/* CTA Button */}
        <Link
          to="/download"
          className={`hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
            isScrolled
              ? 'bg-primary text-surface hover:bg-primary-dark focus-visible:ring-primary focus-visible:ring-offset-white'
              : isDark
                ? 'bg-white text-[#1B2E27] hover:bg-white/90 focus-visible:ring-white focus-visible:ring-offset-[#1B2E27]'
                : 'bg-primary text-surface hover:bg-primary-dark focus-visible:ring-primary'
          }`}
        >
          <Bell size={16} aria-hidden="true" />
          Powiadom mnie
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
