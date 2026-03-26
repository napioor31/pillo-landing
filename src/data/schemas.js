import plLanding from '../i18n/locales/pl/landing.json';

const BASE_URL = 'https://trypillo.pl';

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${BASE_URL}/#website`,
  name: 'Pillo',
  url: BASE_URL,
  description: 'Aplikacja do zarządzania lekami dla pacjentów i opiekunów.',
  inLanguage: ['pl', 'en', 'de'],
};

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${BASE_URL}/#organization`,
  name: 'Pillo',
  url: BASE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${BASE_URL}/images/logo/pillo-logo.webp`,
    width: 512,
    height: 512,
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    url: `${BASE_URL}/kontakt`,
  },
  sameAs: [],
};

export const softwareAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': `${BASE_URL}/#app`,
  name: 'Pillo',
  applicationCategory: 'HealthApplication',
  operatingSystem: 'iOS, Android',
  description:
    'Pillo to aplikacja do zarządzania lekami. Pomaga pacjentom przyjmować leki o właściwej porze dzięki przypomnieniom, a opiekunom — monitorować adherencję bliskich osób zdalnie.',
  url: BASE_URL,
  inLanguage: 'pl',
  offers: [
    {
      '@type': 'Offer',
      name: 'Pillo dla pacjenta',
      price: '0',
      priceCurrency: 'PLN',
      description: 'Bezpłatnie dla pacjentów',
    },
    {
      '@type': 'Offer',
      name: 'Pillo dla opiekuna',
      price: '29.90',
      priceCurrency: 'PLN',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '29.90',
        priceCurrency: 'PLN',
        unitText: 'miesięcznie',
      },
    },
  ],
  publisher: {
    '@id': `${BASE_URL}/#organization`,
  },
};

const allFaqs = [
  ...plLanding.patient.faq,
  ...plLanding.caregiver.faq,
];

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: allFaqs.map(({ question, answer }) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: answer,
    },
  })),
};
