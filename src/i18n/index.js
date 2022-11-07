import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './en.json';
import pl from './pl.json';

i18next.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  compatibilityJSON: 'v3',
  resources: {
    en,
    pl,
  },
});

export default i18next;
