import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { logo } from '../assets/images';

const LegalPageLayout = ({ title, subtitle, date, children }) => {
  return (
    <div className="min-h-screen bg-surface">
      {/* Navbar */}
      <nav className="w-full bg-[#243D34] py-5 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo.src} alt={logo.alt} className="h-9 w-auto rounded-xl" />
            <span className="text-xl font-bold text-white">Pillo</span>
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            Wróć
          </Link>
        </div>
      </nav>

      {/* Header */}
      <div className="bg-[#243D34] pb-12 pt-10">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-[#5DB38D] text-sm font-medium mb-2 uppercase tracking-wider">{subtitle}</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white font-[family-name:var(--font-family-heading)]">
            {title}
          </h1>
          <p className="text-white/50 text-sm mt-3">{date}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-legal max-w-none">
          {children}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-divider/50 bg-surface">
        <div className="max-w-4xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-secondary text-sm">© 2026 Pillo. Wszystkie prawa zastrzeżone.</p>
          <div className="flex gap-6 text-sm">
            <Link to="/polityka-prywatnosci" className="text-text-secondary hover:text-primary transition-colors">Polityka prywatności</Link>
            <Link to="/regulamin" className="text-text-secondary hover:text-primary transition-colors">Regulamin</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalPageLayout;
