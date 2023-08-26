import React, { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Screen from './Screen'

type Props = {
}

const SearchScreen: FC<Props> = () => {
    return <>
        <Screen>
            <View style={styles.container}>
                <Text>
                    SearchScreen
                </Text>
            </View>
        </Screen>
    </>
}

export default SearchScreen

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' }
})
