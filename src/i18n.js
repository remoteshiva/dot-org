import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en } from './lang-en';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    ...en,
    lng: 'en',

    interpolation: {
      escapeValue: false, // react already safe from xss
    },
  });

export default i18n;
