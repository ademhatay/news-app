import React, { FC } from 'react'
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import Screen from './Screen'

type Props = {
  [x: string]: any
}

const SettingsScreen: FC<Props> = ({ navigation }) => {
  return <>
    <Screen>
      <View style={styles.container}>
        <TouchableOpacity style={[styles.button, {backgroundColor: '#26A944'}]}>
          <Text>Türkçe</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, {backgroundColor: '#1471BE'}]}>
          <Text>English</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, {backgroundColor: 'red'}]}>
          <Text>العربية</Text>
        </TouchableOpacity>
      </View>
    </Screen>
  </>
}

export default SettingsScreen

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'space-evenly', alignItems: 'center', paddingVertical: 50 , flexDirection: 'row', paddingHorizontal: 20},
  button: { justifyContent: 'center', alignItems: 'center', backgroundColor: '#ddd', marginVertical: 10, height: 50, borderRadius: 10, width: '30%'},
})
