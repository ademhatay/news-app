import React, { FC } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import Screen from './Screen'

type Props = {
  [x: string]: any
}

const HomeScreen: FC<Props> = ({navigation}) => {
  return <>
    <Screen>
      <View style={styles.container}>
        <Text>
          Hello HOme Screen
        </Text>
        <Button title="Go to Settings" onPress={() => navigation.navigate('MyDrawer', {screen: 'Settings'})} />
      </View>
    </Screen>
  </>
}

export default HomeScreen

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' }
})
