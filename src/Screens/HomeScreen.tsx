import React, { FC } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import Screen from './Screen'
import { useFeeds } from '../Contexts/FeedsContext'
import { BannerFeed, Footer, LastFeeds, Line, MainFeeds, PopularFeeds } from '../Components'

type Props = {
  [x: string]: any
}

const HomeScreen: FC<Props> = ({navigation}) => {

  const data: any = useFeeds();

  return <>
    <Screen>
      <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.container}>

        <View >

          <Text style={{ fontSize: 26, color: '#22262A', marginBottom: 10, padding: 20, paddingBottom: 0, textTransform: 'uppercase', letterSpacing: 2 }}>
            Featured
          </Text>
          {
            data.feeds.filter((item: any) => item.main).map((item: any, index: number) => {
              return <MainFeeds key={index} item={item} navigation={navigation} />
            })
          }


          <Line />

          <Text style={{ fontSize: 26, color: '#22262A', marginBottom: 10, padding: 20, paddingBottom: 0, textTransform: 'uppercase', letterSpacing: 2 }}>
            Popular
          </Text>

          {
            data.feeds.filter((item: any) => item.popular).map((item: any, index: number) => {
              return <PopularFeeds navigation={navigation} key={index} item={item} num={index} />
            })
          }

          <Line style={styles.line} />

          {
            data.feeds.filter((item: any) => item.banner).map((item: any, index: number) => {
              return <BannerFeed  navigation={navigation} key={index} item={item} />
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
      </ScrollView>
    </Screen >
  </>
}

export default HomeScreen

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  line: { marginTop: 30, marginBottom: 30 }
})
