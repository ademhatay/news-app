import { FC } from "react"
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native"

import { style as generalStyles } from '../Config/style'

import Line from "./Line"




type Props = {
    item: any,
    navigation: any
}

const MainFeeds: FC<Props> = ({ item, navigation }) => {
    return <>
        <View style={styles.container}>
            {item.image ? <Image source={{ uri: item.image }} style={styles.image} /> : null}
            <Text style={generalStyles.title}>
                {item.title}
            </Text>
            <Text style={generalStyles.desc}>
                {item.desc ? item.desc : 'No description'}
            </Text>
            <View style={generalStyles.bottomContainer}>
                <Image source={require('../assets/pp.png')} style={{ width: 32, height: 32 }} />
                <Text style={generalStyles.authorTitle}>
                    {item.author}
                </Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('MyStack', {screen: 'Details', params: {item}})}
                    style={styles.readMoreButton}>
                    <Text style={styles.readMore}>Read More</Text>
                </TouchableOpacity>
            </View>
            <Line style={{ backgroundColor: '#ddd', marginTop: 30 }} />
        </View>
    </>
}

const styles = StyleSheet.create({
    container: { padding: 20 },
    image: { width: '100%', height: 200, borderRadius: 10, resizeMode: 'cover' },
    readMore: { color: '#ff5c5c' },
    readMoreButton: { marginLeft: 'auto', padding: 10, borderRadius: 13, borderWidth: 0.5 }

})



export default MainFeeds
