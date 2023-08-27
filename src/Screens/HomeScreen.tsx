import React, { FC } from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Screen from './Screen'
import { useFeeds } from '../Contexts/FeedsContext'
import { MainFeeds } from '../Components'

type Props = {
  [x: string]: any
}

const HomeScreen: FC<Props> = () => {

  const data: any = useFeeds();

  return <>
    <Screen>
      <ScrollView style={styles.container}>
        <View style={{ marginBottom: 70 }} >
          {
            data.feeds.slice(0, 3).map((item: any, index: number) => {
              return <MainFeeds key={index} item={item} />
            })
          }
        </View>
      </ScrollView>
    </Screen >
  </>
}

export default HomeScreen

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' }
})
