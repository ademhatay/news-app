import React, { FC, useEffect } from 'react'
import { I18nManager, ScrollView, StyleSheet, Text, View } from 'react-native'
import Screen from './Screen'
import { useFeeds } from '../Contexts/FeedsContext'
import { BannerFeed, Footer, Indicator, LastFeeds, Line, MainFeeds, PopularFeeds } from '../Components'

import i18n, { t } from '../lang/_i18n'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { getLocales } from 'expo-localization'



type Props = {
  [x: string]: any
}

const HomeScreen: FC<Props> = ({ navigation }) => {

  const data: any = useFeeds();

  const getLocalLanguage = async () => {
    try {
      const language = await AsyncStorage.getItem('language');
      if (language) {
        data.setLanguage(language);
      } else {
        const locales = getLocales();
        data.setLanguage(locales[0].languageCode);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    data.getFeeds();
    getLocalLanguage();
  }, [])


  return <>
    <Screen>
      {data.loading ? <Indicator />
        : <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.container}>

          <View >

            <Text style={{ fontSize: 26, color: '#22262A', marginBottom: 10, padding: 20, paddingBottom: 0, textTransform: 'uppercase', letterSpacing: 2 }}>
              {t('featured', { locale: data.language })}
            </Text>
            {
              data.feeds.filter((item: any) => item.main).map((item: any, index: number) => {
                return <MainFeeds key={index} item={item} navigation={navigation} />
              })
            }


            <Line />

            <Text style={{ fontSize: 26, color: '#22262A', marginBottom: 10, padding: 20, paddingBottom: 0, textTransform: 'uppercase', letterSpacing: 2 }}>
              {t('popular', { locale: data.language })}
            </Text>

            {
              data.feeds.filter((item: any) => item.popular).map((item: any, index: number) => {
                return <PopularFeeds navigation={navigation} key={index} item={item} num={index} />
              })
            }

            <Line style={styles.line} />

            {
              data.feeds.filter((item: any) => item.banner).map((item: any, index: number) => {
                return <BannerFeed navigation={navigation} key={index} item={item} />
              })
            }

            <Line style={styles.line} />

            {
              data.feeds.filter((item: any) => item.last).map((item: any, index: number) => {
                return <LastFeeds navigation={navigation} key={index} item={item} />
              })
            }

            <Footer />



          </View>
        </ScrollView>}
    </Screen >
  </>
}

export default HomeScreen

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  line: { marginTop: 30, marginBottom: 30 }
})
