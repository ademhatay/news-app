import React, { FC } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'


type Props = {
}

const Footer: FC<Props> = () => {
    return <>
        <View style={styles.container}>
            <Image source={require('../assets/footer.png')} style={{ width: 89, height: 14 }} />
            <Text style={{ color: '#fff', fontSize: 14, marginVertical: 20 }}>Copyright © 2023 Hitatek.</Text>
            <View>
                <Text style={{ color: '#3FB6E5', fontSize: 18, marginBottom: 10, fontWeight: 'bold' }}>Corporate</Text>
                <Text style={{ color: '#fff', fontSize: 14, marginBottom: 10 }}>About HITATEK</Text>
                <Text style={{ color: '#fff', fontSize: 14, marginBottom: 10 }}>Jobs</Text>
                <Text style={{ color: '#fff', fontSize: 14, marginBottom: 10 }}>Press Releases</Text>
                <Text style={{ color: '#fff', fontSize: 14, marginBottom: 10 }}>Documentary</Text>
                <Text style={{ color: '#fff', fontSize: 14, marginBottom: 10 }}>Submission</Text>
                <Text style={{ color: '#fff', fontSize: 14, marginBottom: 10 }}>Contact Us</Text>
            </View>
        </View>

    </>
}



export default Footer

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#222',
        width: '100%',
        paddingBottom: 100,
        paddingTop: 50,
        paddingHorizontal: 50,
    }
})
