import { Link } from 'react-router-dom';
import { ArrowLeft, Globe, FileText } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { logo } from '../assets/images';

const LegalPageLayout = ({ title, subtitle, date, children, showOriginal, onToggleOriginal }) => {
  const { t, i18n } = useTranslation('common');
  const isNonPolish = i18n.language !== 'pl';

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
            {t('nav.back')}
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

      {/* Translation banner */}
      {isNonPolish && onToggleOriginal && (
        <div className={`border-b ${showOriginal ? 'bg-primary/10 border-primary/20' : 'bg-amber-50 border-amber-200'}`}>
          <div className="max-w-4xl mx-auto px-6 py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            {showOriginal ? (
              <>
                <div className="flex items-center gap-2 text-sm text-primary">
                  <FileText size={15} aria-hidden="true" />
                  <span>{t('legal.viewingOriginal')}</span>
                </div>
                <button
                  onClick={onToggleOriginal}
                  className="flex items-center gap-1.5 text-sm font-medium text-primary border border-primary/30 rounded-lg px-3 py-1.5 hover:bg-primary/10 transition-colors shrink-0"
                >
                  <Globe size={14} aria-hidden="true" />
                  {t('legal.backToTranslation')}
                </button>
              </>
            ) : (
              <>
                <div className="flex items-center gap-2 text-sm text-amber-800">
                  <Globe size={15} aria-hidden="true" />
                  <span>{t('legal.translationNotice')}</span>
                </div>
                <button
                  onClick={onToggleOriginal}
                  className="flex items-center gap-1.5 text-sm font-medium text-amber-900 border border-amber-300 rounded-lg px-3 py-1.5 hover:bg-amber-100 transition-colors shrink-0"
                >
                  <FileText size={14} aria-hidden="true" />
                  {t('legal.viewOriginal')}
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-legal max-w-none">
          {children}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-divider/50 bg-surface">
        <div className="max-w-4xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-secondary text-sm">{t('footer.copyright', { year: new Date().getFullYear() })}</p>
          <div className="flex gap-6 text-sm">
            <Link to="/polityka-prywatnosci" className="text-text-secondary hover:text-primary transition-colors">{t('footer.privacyPolicy')}</Link>
            <Link to="/regulamin" className="text-text-secondary hover:text-primary transition-colors">{t('footer.terms')}</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalPageLayout;
