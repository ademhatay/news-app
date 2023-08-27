import { FC } from "react"
import { View, StyleSheet, TouchableOpacity, Image, Text } from "react-native"

import { style as generalStyles } from '../Config/style'

type Props = {
    item: any,
    navigation: any
}

const BannerFeed: FC<Props> = ({ item, navigation }) => {

    return <>
        <View style={styles.container}>
            <View>
                <Image source={{ uri: item.image }} style={styles.image} />
                <View style={{ padding: 20, backgroundColor: '#000' }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('MyStack', { screen: 'Details', params: { item } })}
                    >
                        <Text style={[generalStyles.title, { color: '#fff', fontSize: 30 }]}>
                            {item.title}
                        </Text>
                    </TouchableOpacity>
                    <View style={generalStyles.bottomContainer}>
                        <Image source={{ uri: item?.authorImage }} style={{ width: 32, height: 32, resizeMode: 'contain' }} />
                        <Text style={[generalStyles.authorTitle, { color: '#fff' }]}>
                            {item.author}
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    </>
}

const styles = StyleSheet.create({
    container: {},
    image: { width: '100%', height: 200, resizeMode: 'cover' },

})



export default BannerFeed
