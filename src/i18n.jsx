import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import languageEN from "./locales/en/translation.json";
import languajeES from "./locales/es/translation.json";

const resources = {
  en: {
    translation: languageEN,
  },
  es: {
    translation: languajeES,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "es",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
