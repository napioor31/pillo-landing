import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import plCommon from './locales/pl/common.json';
import plLanding from './locales/pl/landing.json';
import plPrivacy from './locales/pl/privacy.json';
import plTerms from './locales/pl/terms.json';
import enCommon from './locales/en/common.json';
import enLanding from './locales/en/landing.json';
import enPrivacy from './locales/en/privacy.json';
import enTerms from './locales/en/terms.json';
import deCommon from './locales/de/common.json';
import deLanding from './locales/de/landing.json';
import dePrivacy from './locales/de/privacy.json';
import deTerms from './locales/de/terms.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    showSupportNotice: false,
    resources: {
      pl: { common: plCommon, landing: plLanding, privacy: plPrivacy, terms: plTerms },
      en: { common: enCommon, landing: enLanding, privacy: enPrivacy, terms: enTerms },
      de: { common: deCommon, landing: deLanding, privacy: dePrivacy, terms: deTerms },
    },
    fallbackLng: 'pl',
    supportedLngs: ['pl', 'en', 'de'],
    defaultNS: 'common',
    ns: ['common', 'landing', 'privacy', 'terms'],
    load: 'languageOnly',
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: 'pillo_lang',
      caches: ['localStorage'],
    },
    interpolation: { escapeValue: false },
  });

export default i18n;
