import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { logo } from '../assets/images';

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

const TOPICS = [
  'Pytanie ogólne',
  'Problem techniczny',
  'Współpraca / Partnerstwo',
  'Prasa i media',
  'Inne',
];

const inputClass =
  'w-full px-4 py-3 rounded-xl border border-divider bg-surface text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-200 text-base';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', topic: '', message: '', botcheck: '' });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState('');

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    // Honeypot: reject bots
    if (form.botcheck) return;

    setStatus('submitting');
    setErrorMsg('');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: form.name,
          email: form.email,
          subject: `[Pillo] ${form.topic || 'Nowa wiadomość'}`,
          message: form.message,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus('success');
        setForm({ name: '', email: '', topic: '', message: '', botcheck: '' });
      } else {
        throw new Error(data.message || 'Nieznany błąd');
      }
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message || 'Coś poszło nie tak. Spróbuj ponownie.');
    }
  }

  return (
    <div className="min-h-dvh flex flex-col bg-surface relative overflow-x-hidden">

      {/* Background */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 80% 60% at 15% 10%, #E8C27A22 0%, transparent 65%), radial-gradient(ellipse 70% 70% at 85% 15%, #2F4A3F12 0%, transparent 60%), radial-gradient(ellipse 90% 60% at 50% 100%, #5DB38D18 0%, transparent 60%)',
        }} />
        <div className="absolute top-[-8%] left-[-4%] w-[600px] h-[600px] rounded-full bg-accent-gold/15 blur-[140px]" />
        <div className="absolute top-[10%] right-[-6%] w-[480px] h-[480px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-[-8%] left-[10%] w-[560px] h-[560px] rounded-full bg-[#5DB38D]/15 blur-[130px]" />
      </div>

      {/* Navbar */}
      <nav className="relative z-50 shrink-0 w-full py-4 bg-surface/70 backdrop-blur-md border-b border-divider/40">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:rounded-lg">
            <img src={logo.src} alt={logo.alt} className="h-9 w-auto rounded-xl" />
            <span className="text-xl font-bold text-primary">Pillo</span>
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors text-sm font-medium"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            Wróć na stronę
          </Link>
        </div>
      </nav>

      {/* Main */}
      <main className="relative z-10 flex-1 px-6 py-14 sm:py-20">
        <div className="max-w-xl mx-auto">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <p className="text-[#5DB38D] text-sm font-semibold uppercase tracking-widest mb-3">
              Napisz do nas
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-primary leading-tight mb-4 font-[family-name:var(--font-family-heading)]">
              Kontakt
            </h1>
            <p className="text-text-secondary text-lg leading-relaxed">
              Masz pytanie lub chcesz się z nami skontaktować?<br />
              Odpisujemy zwykle w ciągu 24&nbsp;godzin.
            </p>
          </motion.div>

          {/* Form card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-surface/80 backdrop-blur-sm border border-divider/60 rounded-2xl shadow-sm p-5 sm:p-8"
          >
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center text-center py-8 gap-4"
                >
                  <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center">
                    <CheckCircle size={32} className="text-success" />
                  </div>
                  <h2 className="text-2xl font-bold text-primary font-[family-name:var(--font-family-heading)]">
                    Wiadomość wysłana!
                  </h2>
                  <p className="text-text-secondary">
                    Dziękujemy za kontakt. Odezwiemy się najszybciej jak to możliwe.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-2 text-sm text-primary underline underline-offset-2 hover:text-primary-dark transition-colors"
                  >
                    Wyślij kolejną wiadomość
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  noValidate
                  className="flex flex-col gap-5"
                >
                  {/* Honeypot — hidden from real users, bots fill it */}
                  <input
                    type="checkbox"
                    name="botcheck"
                    checked={!!form.botcheck}
                    onChange={handleChange}
                    className="hidden"
                    tabIndex={-1}
                    aria-hidden="true"
                  />

                  {/* Name */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-sm font-medium text-text-primary">
                      Imię i nazwisko <span className="text-error" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      placeholder="Jan Kowalski"
                      value={form.name}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-sm font-medium text-text-primary">
                      Adres e-mail <span className="text-error" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      placeholder="jan@przykład.pl"
                      value={form.email}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>

                  {/* Topic */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="topic" className="text-sm font-medium text-text-primary">
                      Temat
                    </label>
                    <select
                      id="topic"
                      name="topic"
                      value={form.topic}
                      onChange={handleChange}
                      className={`${inputClass} appearance-none cursor-pointer`}
                    >
                      <option value="">Wybierz temat (opcjonalnie)</option>
                      {TOPICS.map(t => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-sm font-medium text-text-primary">
                      Wiadomość <span className="text-error" aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Napisz swoją wiadomość…"
                      value={form.message}
                      onChange={handleChange}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {/* Error */}
                  <AnimatePresence>
                    {status === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-error/8 border border-error/20 text-error text-sm"
                        role="alert"
                      >
                        <AlertCircle size={16} className="shrink-0" />
                        {errorMsg}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-xl bg-primary text-surface font-semibold text-base hover:bg-primary-dark transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader size={18} className="animate-spin" aria-hidden="true" />
                        Wysyłanie…
                      </>
                    ) : (
                      <>
                        <Send size={18} aria-hidden="true" />
                        Wyślij wiadomość
                      </>
                    )}
                  </button>

                  <p className="text-text-secondary/50 text-xs text-center">
                    Twoje dane są używane wyłącznie w celu odpowiedzi na wiadomość.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-20 shrink-0 border-t border-divider/40 py-4 px-6 bg-surface/60 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-sm">
          <p className="text-text-secondary/50">© 2026 Pillo. Wszystkie prawa zastrzeżone.</p>
          <div className="flex gap-6">
            <Link to="/polityka-prywatnosci" className="text-text-secondary hover:text-primary transition-colors">
              Polityka prywatności
            </Link>
            <Link to="/regulamin" className="text-text-secondary hover:text-primary transition-colors">
              Regulamin
            </Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
