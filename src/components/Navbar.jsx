import { Link } from 'react-router-dom';
import RoleSwitcher from './RoleSwitcher';
import { logo } from '../assets/images';

const Navbar = ({ activeRole, onRoleChange, isDark = false }) => {
  return (
    <nav className="w-full py-6 relative z-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className={`flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:rounded-lg ${
          isDark ? 'focus-visible:ring-[#3F8F6B]' : 'focus-visible:ring-primary'
        }`}>
          <img
            src={logo.src}
            alt={logo.alt}
            className="h-10 w-auto rounded-xl"
          />
          <span className={`text-xl font-bold transition-colors duration-500 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>Pillo</span>
        </a>
        
        {/* Role Switcher */}
        <RoleSwitcher activeRole={activeRole} onRoleChange={onRoleChange} isDark={isDark} />
        
        {/* CTA Button */}
        <Link
          to="/download"
          className={`hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
            isDark
              ? 'bg-white text-[#1B2E27] hover:bg-white/90 focus-visible:ring-white focus-visible:ring-offset-[#1B2E27]'
              : 'bg-primary text-surface hover:bg-primary-dark focus-visible:ring-primary'
          }`}
        >
          <i className="fi fi-rr-download" aria-hidden="true"></i>
          Pobierz
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
