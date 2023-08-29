import React, { FC } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { t } from '../lang/_i18n'


type Props = {
}

const Footer: FC<Props> = () => {
    return <>
        <View style={styles.container}>
            <Image source={require('../assets/footer.png')} style={{ width: 89, height: 14 }} />
            <Text style={{ color: '#fff', fontSize: 14, marginVertical: 20 }}>
                {
                    t('copyright')
                }
            </Text>
            <View>
                <Text style={{ color: '#3FB6E5', fontSize: 18, marginBottom: 10, fontWeight: 'bold' }}>
                    {t('corporate')}
                </Text>
                <Text style={{ color: '#fff', fontSize: 14, marginBottom: 10 }}>
                    {t('aboutUs')}
                </Text>
                <Text style={{ color: '#fff', fontSize: 14, marginBottom: 10 }}>
                    {t('jobs')}
                </Text>
                <Text style={{ color: '#fff', fontSize: 14, marginBottom: 10 }}>
                    {t('pressRelases')}
                </Text>
                <Text style={{ color: '#fff', fontSize: 14, marginBottom: 10 }}>
                    {t('documentary')}
                </Text>
                <Text style={{ color: '#fff', fontSize: 14, marginBottom: 10 }}>
                    {t('submissons')}
                </Text>
                <Text style={{ color: '#fff', fontSize: 14, marginBottom: 10 }}>
                    {t('contactUs')}
                </Text>
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
