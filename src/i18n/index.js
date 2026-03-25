import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import plCommon from './locales/pl/common.json';
import plLanding from './locales/pl/landing.json';
import enCommon from './locales/en/common.json';
import enLanding from './locales/en/landing.json';
import deCommon from './locales/de/common.json';
import deLanding from './locales/de/landing.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      pl: { common: plCommon, landing: plLanding },
      en: { common: enCommon, landing: enLanding },
      de: { common: deCommon, landing: deLanding },
    },
    fallbackLng: 'pl',
    supportedLngs: ['pl', 'en', 'de'],
    defaultNS: 'common',
    ns: ['common', 'landing'],
    load: 'languageOnly',
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: 'pillo_lang',
      caches: ['localStorage'],
    },
    interpolation: { escapeValue: false },
  });

export default i18n;
