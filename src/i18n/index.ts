import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

// Importe suas traduções organizadas por namespace
import translations from './locales';

const i18nConfig = {
  resources: translations,
  fallbackLng: 'pt-BR',
  defaultNS: 'common', // Nome do namespace padrão
  interpolation: {
    escapeValue: false, // React já faz escape automaticamente
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init(i18nConfig);

export default i18n;