// Static non-translatable feature data (icons + locale-specific images per role)
const staticFeatures = {
  patient: {
    pl: [
      { icon: 'Type', image: '/images/przejrzyste i czytelne -pl.webp' },
      { icon: 'Bell', image: '/images/przypomni -pl.webp' },
      { icon: 'CheckCircle', image: '/images/to co potrzebne -pl.webp' },
    ],
    en: [
      { icon: 'Type', image: '/images/przejrzyste i czytelne -en.webp' },
      { icon: 'Bell', image: '/images/przypomni -en.webp' },
      { icon: 'CheckCircle', image: '/images/to co potrzebne -en.webp' },
    ],
  },
  caregiver: {
    pl: [
      { icon: 'BellRing', image: '/images/powiadomienie -pl.webp' },
      { icon: 'History', image: '/images/tydzien -pl.webp' },
      { icon: 'BarChart3', image: '/images/tydzien -pl.webp' },
    ],
    en: [
      { icon: 'BellRing', image: '/images/powiadomienie -en.webp' },
      { icon: 'History', image: '/images/tydzien -en.webp' },
      { icon: 'BarChart3', image: '/images/tydzien -en.webp' },
    ],
  },
};

export function getRoleContent(role, t, lang = 'pl') {
  const imgKey = lang === 'pl' ? 'pl' : 'en';
  const translatedFeatures = t(`${role}.features`, { returnObjects: true });
  const features = Array.isArray(translatedFeatures)
    ? translatedFeatures.map((f, i) => ({ ...staticFeatures[role][imgKey][i], ...f }))
    : staticFeatures[role][imgKey];

  return {
    headline: t(`${role}.headline`),
    subheadline: t(`${role}.subheadline`),
    ctaPrimary: t(`${role}.ctaPrimary`),
    ctaSecondary: t(`${role}.ctaSecondary`),
    trustNote: t(`${role}.trustNote`),
    howItWorks: t(`${role}.howItWorks`, { returnObjects: true }),
    features,
    testimonials: t(`${role}.testimonials`, { returnObjects: true }),
    faq: t(`${role}.faq`, { returnObjects: true }),
    footer: t(`${role}.footer`, { returnObjects: true }),
  };
}

