import React, { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Screen from './Screen'

type Props = {
}

const SingleNewScreen: FC<Props> = () => {
    return <>
        <Screen>
            <View style={styles.container}>
                <Text>
                    SingleNewScreen
                </Text>
            </View>
        </Screen>
    </>
}

export default SingleNewScreen

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' }
})
