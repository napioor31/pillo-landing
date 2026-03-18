import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { logo } from '../assets/images';

const Footer = ({ activeRole = 'patient', footer = {} }) => {
  const isCaregiver = activeRole === 'caregiver';

  return (
    <footer id="download" className={`w-full py-20 relative overflow-hidden transition-colors duration-700 ${
      isCaregiver ? 'bg-[#1B2E27]' : 'bg-[#243D34]'
    }`}>
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" aria-hidden="true" />
      <div className={`absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 transition-colors duration-700 ${
        isCaregiver ? 'bg-[#3F8F6B]/20' : 'bg-accent-gold/10'
      }`} aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-surface mb-6 font-[family-name:var(--font-family-heading)]">
            {footer.headline}
          </h2>
          <p className="text-lg text-surface/80 max-w-2xl mx-auto mb-10">
            {footer.sub}
          </p>

          {/* Download Buttons - Official Store Badges */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* App Store Button */}
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`block transition-transform duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded-xl w-36 ${
                isCaregiver
                  ? 'focus-visible:ring-accent-gold focus-visible:ring-offset-[#1B2E27]'
                  : 'focus-visible:ring-accent-gold focus-visible:ring-offset-[#243D34]'
              }`}
              aria-label="Pobierz aplikację z App Store"
            >
              <img
                src="/images/badges/app-store.svg"
                alt="Pobierz w App Store"
                className="w-full h-auto"
              />
            </a>

            {/* Google Play Button */}
            <a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`block transition-transform duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded-xl w-44 ${
                isCaregiver
                  ? 'focus-visible:ring-accent-gold focus-visible:ring-offset-[#1B2E27]'
                  : 'focus-visible:ring-accent-gold focus-visible:ring-offset-[#243D34]'
              }`}
              aria-label="Pobierz aplikację z Google Play"
            >
              <img
                src="/images/badges/google-play.png"
                alt="Pobierz w Google Play"
                className="w-full h-auto"
              />
            </a>
          </div>
        </motion.div>

        {/* Footer Links */}
        <div className="border-t border-surface/20 pt-10">
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Logo with Title */}
            <a href="#" className="flex items-center gap-3 flex-1 justify-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:rounded-lg">
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-10 w-auto rounded-xl"
              />
              <span className="text-xl font-bold text-surface">Pillo</span>
            </a>

            {/* Links */}
            <nav className="flex flex-wrap items-center justify-center gap-6">
              <Link to="/polityka-prywatnosci" className="text-surface/80 hover:text-surface transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:rounded">Polityka prywatności</Link>
              <Link to="/regulamin" className="text-surface/80 hover:text-surface transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:rounded">Regulamin</Link>
              <Link to="/kontakt" className="text-surface/80 hover:text-surface transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:rounded">Kontakt</Link>
            </nav>

            {/* Copyright */}
            <p className="text-surface/60 text-sm flex-1 text-right">
              © 2026 Pillo. Wszystkie prawa zastrzeżone.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
