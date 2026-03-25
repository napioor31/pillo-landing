import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { logo } from '../assets/images';

const Footer = ({ activeRole = 'patient', footer = {} }) => {
  const isCaregiver = activeRole === 'caregiver';
  const [email, setEmail] = useState('');

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

          {/* Email Signup Form */}
          <div className="flex flex-col items-center gap-3">
            <div className="flex flex-col sm:flex-row gap-2 w-full max-w-2xl">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="twój@email.pl"
                className="flex-1 min-w-0 px-5 py-3.5 rounded-full text-base bg-white/10 text-white placeholder-white/40 border-2 border-white/20 outline-none focus:border-white/40 focus:ring-2 focus:ring-white/10 transition-all duration-300"
              />
              <button
                type="button"
                className="px-5 py-3.5 rounded-full font-semibold text-base transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap shrink-0 bg-white text-[#243D34] hover:bg-white/90 shadow-lg shadow-black/20 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#243D34]"
              >
                Powiadom mnie o premierze
                <ArrowRight size={18} aria-hidden="true" />
              </button>
            </div>
            <p className="text-surface/50 text-sm">
              Bezpłatne · Bez spamu · Powiadomimy gdy aplikacja będzie gotowa
            </p>
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
                loading="lazy"
                width={40}
                height={40}
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
            <p className="text-surface/60 text-sm flex-1 text-center md:text-right">
              © 2026 Pillo. Wszystkie prawa zastrzeżone.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
