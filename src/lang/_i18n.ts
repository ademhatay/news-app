import {I18n} from 'i18n-js';
import { getLocales } from 'expo-localization';
import AsyncStorage from '@react-native-async-storage/async-storage';

import tr from './tr';
import en from './en';
import ar from './ar';
import { I18nManager } from 'react-native';
import { useEffect } from 'react';

const locales = getLocales()[0].languageCode;
const i18n = new I18n({tr,en,ar});


i18n.locale = locales;

i18n.enableFallback = true;


export const isRtl = locales.indexOf('ar') === 0 ? true : false;
I18nManager.forceRTL(isRtl);


i18n.translations = {
tr,en,ar
};

export default i18n;
const t = i18n.t.bind(i18n);
export { t };
