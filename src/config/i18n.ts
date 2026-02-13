// Internationalization setup

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translations
const resources = {
  en: {
    translation: {
      welcome: 'Welcome to BelezaStore',
      // add more translation keys here
    },
  },
  pt: {
    translation: {
      welcome: 'Bem-vindo ao BelezaStore',
      // add more translation keys here
    },
  },
};

// i18next Configuration

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;