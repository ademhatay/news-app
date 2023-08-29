import React, { FC, useEffect } from 'react'
import { TouchableOpacity, StyleSheet, Text, View, DevSettings, I18nManager } from 'react-native'
import Screen from './Screen'
import { useFeeds } from '../Contexts/FeedsContext'

import { t } from '../lang/_i18n'
import AsyncStorage from '@react-native-async-storage/async-storage'

type Props = {
  [x: string]: any
}

const SettingsScreen: FC<Props> = ({ navigation }) => {
  7

  const { language, setLanguage, getFeeds }: any = useFeeds();

  const handleChangeLanguage = async (newLanguage: string) => {
    setLanguage(newLanguage);
    await AsyncStorage.setItem('language', newLanguage);
  };

  useEffect(() => {
    getFeeds();
  }, [language])

  useEffect(() => {
    if (language) {
      const isRtl = language === 'ar';
      I18nManager.forceRTL(isRtl);
    }
  }, [language]);





  return <>
    <Screen>
      <View style={styles.container}>
        <Text
          style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}
        >
          {t('settings', { locale: language })}
        </Text>

        <View>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>
            {t('language', { locale: language })} - {language}
          </Text>
          <View style={{ width: "100%", flexDirection: 'row', marginTop: 10, justifyContent: 'space-evenly' }}>
            <TouchableOpacity
              onPress={() => handleChangeLanguage('en')}
              style={styles.button}
            >
              <Text style={{ color: 'white' }}>English</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleChangeLanguage('tr')}
              style={styles.button}
            >
              <Text style={{ color: 'white' }}>Türkçe</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleChangeLanguage('ar')}
              style={styles.button}
            >
              <Text style={{ color: 'white' }}>Arabic</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Screen>
  </>
}

export default SettingsScreen

const styles = StyleSheet.create({
  container: { flex: 1, paddingVertical: 50, paddingHorizontal: 20 },
  button: { backgroundColor: 'black', padding: 10, borderRadius: 5, marginTop: 20 },
  active: { backgroundColor: 'red' }
})
