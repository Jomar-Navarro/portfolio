import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Importa i file di traduzione
import en from "./en.json";
import it from "./it.json";

i18n
	.use(LanguageDetector) // Rileva automaticamente la lingua
	.use(initReactI18next) // Inizializza i18next per React
	.init({
		resources: {
			en: { translation: en },
			it: { translation: it },
		},
		fallbackLng: "en", // Lingua di default
		interpolation: {
			escapeValue: false, // React protegge già dal XSS
		},
	});

export default i18n;
