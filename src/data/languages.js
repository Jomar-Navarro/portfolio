import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
	.use(LanguageDetector) // Rileva automaticamente la lingua del browser
	.use(initReactI18next) // Inizializza i18next per React
	.init({
		resources: {
			en: {
				translation: {
					home: "Home",
					about: "About Me",
					projects: "Projects",
				},
			},
			it: {
				translation: {
					home: "Home",
					about: "Chi sono",
					projects: "Progetti",
				},
			},
		},
		fallbackLng: "en", // Lingua di default
		interpolation: {
			escapeValue: false, // React già protegge dall'injection di XSS
		},
	});

export default i18n;
