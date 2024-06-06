import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslations from '../translations/en/global.json';
import azTranslations from '../translations/az/global.json';
import ruTranslations from '../translations/ru/global.json';
import geTranslations from '../translations/ge/global.json';

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
