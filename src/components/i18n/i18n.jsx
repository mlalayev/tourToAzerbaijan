import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslations from '../Translations/EN/global.json';
import azTranslations from '../Translations/AZ/global.json';
import ruTranslations from '../Translations/RU/global.json';
import geTranslations from '../Translations/GE/global.json';

// Retrieve the saved language from localStorage, or default to 'en'
const savedLanguage = localStorage.getItem('i18nextLng') || 'en';

i18n
    .use(initReactI18next)
    .init({
        lng: savedLanguage, 
        fallbackLng: 'en',
        debug: true,
        interpolation: {
            escapeValue: false
        },
        resources: {
            en: {
                translation: enTranslations
            },
            az: {
                translation: azTranslations
            },
            ru: {
                translation: ruTranslations
            },
            ge: {
                translation: geTranslations
            }
        }
    });

i18n.on('languageChanged', (lng) => {
    localStorage.setItem('i18nextLng', lng);
});

export default i18n;
