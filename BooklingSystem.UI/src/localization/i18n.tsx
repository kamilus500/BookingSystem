import i18n from "i18next";
import {initReactI18next } from "react-i18next";
import translationEN from "./locales/en/translationEN.json"
import translationPL from "./locales/pl/translationPL.json"

i18n
.use(initReactI18next)
.init({
   resources: {
    en: {
      translation: translationEN
    },
    pl: {
        translation: translationPL
      }
  },
  lng: "pl", 
  fallbackLng: "en",
});