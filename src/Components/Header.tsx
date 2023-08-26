import React, { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'
type Props = {
}

const Header: FC<Props> = () => {
    return <>
        <Text>Header</Text>
    </>
}

export default Header

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' }
})
