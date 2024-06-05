import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslations from '../translations/en/global.json';
import azTranslations from '../translations/az/global.json';

i18n
    .use(initReactI18next)
    .init({
        lng: 'en',
        fallbackLng: 'en',
        debug: true,
        resources: {
            en: {
                translation: enTranslations
            },
            az: {
                translation: azTranslations
            }
        }
    });

export default i18n;
