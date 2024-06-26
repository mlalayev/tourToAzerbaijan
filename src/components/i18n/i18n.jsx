import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslations from '../Translations/EN/global.json';
import azTranslations from '../Translations/AZ/global.json';
import ruTranslations from '../Translations/RU/global.json';
import geTranslations from '../Translations/GE/global.json';

i18n
    .use(initReactI18next)
    .init({
        lng: 'en',
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

export default i18n;
