import React, { FC } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import Screen from './Screen'

type Props = {
  [x: string]: any
}

const SettingsScreen: FC<Props> = ({navigation}) => {
  return <>
    <Screen>
      <View style={styles.container}>
        <Text> SettingsScreen </Text>
      </View>
    </Screen>
  </>
}

export default SettingsScreen

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' }
})
