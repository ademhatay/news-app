import React, { FC } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import Screen from './Screen'
import { useFeeds } from '../Contexts/FeedsContext'
import { MainFeeds } from '../Components'


import { t } from '../lang/_i18n'


type Props = {
  [x: string]: any
}

const FavoriteScreen: FC<Props> = ({ navigation }) => {

  const { favorites, language }: any = useFeeds();

  return <>
    <Screen>
      <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ paddingBottom: 50 }}>
          {
            favorites.length === 0 ? <View style={styles.container}>
            <Text style={{ fontSize: 26, fontWeight: 'bold', color: '#BFC3C9', textAlign: 'center', marginTop: 20 }}>
              {t('noFavorites', {locale: language})}
            </Text>
          </View> : favorites.map((item: any, index: number) => {
            return <MainFeeds key={index} item={item} navigation={navigation} />
          })
          }
        </View>
      </ScrollView>
    </Screen >
  </>
}

export default FavoriteScreen

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' }
})
