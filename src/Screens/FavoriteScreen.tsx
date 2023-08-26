import React, { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Screen from './Screen'

type Props = {
}

const FavoriteScreen: FC<Props> = () => {
  return <>
    <Screen>
      <View style={styles.container}>
        <Text>
          FavoriteScreen
        </Text>
      </View>
    </Screen>
  </>
}

export default FavoriteScreen

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' }
})
