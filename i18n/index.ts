import AsyncStorage from '@react-native-async-storage/async-storage';

import i18n from 'i18next';

import { initReactI18next } from 'react-i18next';

import { DevSettings, I18nManager } from 'react-native';

import en from './locales/en.json';

import ar from './locales/ar.json';

export const LANG_KEY = 'app_language';

export async function initI18n() {
  // try to load stored language
  const savedLang = await AsyncStorage.getItem(LANG_KEY);
  const defaultLang = savedLang || 'ar'; // default to Arabic

  await i18n.use(initReactI18next).init({
    compatibilityJSON: 'v4',
    lng: defaultLang,
    fallbackLng: 'ar',
    resources: {
      en: { translation: en },
      ar: { translation: ar },
    },
    interpolation: { escapeValue: false },
  });

  // Set text direction
  setAppDirection(defaultLang);

  return i18n;
}

export async function changeLanguage(lang: 'en' | 'ar') {
  await i18n.changeLanguage(lang);
  await AsyncStorage.setItem(LANG_KEY, lang);
  setAppDirection(lang);
}

function setAppDirection(lang: string) {
  const isRTL = lang === 'ar';
  if (I18nManager.isRTL !== isRTL) {
    I18nManager.forceRTL(isRTL);
    DevSettings.reload();
  }
}

export default i18n;
