import { FC } from "react"
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native"

import { style as generalStyles } from '../Config/style'
import Line from "./Line"



type Props = {
    item: any,
    navigation: any
}

const LastFeeds: FC<Props> = ({ item, navigation}) => {

    return <>
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.navigate('MyStack', {screen: 'Details', params: {item}})}
            >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {
                        item.image ? <Image source={{ uri: item.image }} style={styles.image} /> : <Image source={{ uri: 'https://cdn-i.pr.trt.com.tr/trtworld/w1180/h663/q70/0m_92557_GettyImages1185884207_1605698219747.jpg' }} style={styles.image} />
                    }
                    <Text style={{textTransform: 'uppercase', fontSize: 12, color: '#A0A5AA', marginLeft: 20, letterSpacing: 1}}>
                        2 minutes ago
                    </Text>
                </View>
                <View>
                    <Text style={[generalStyles.title, { marginTop: 10}]}>
                        {item.title}
                    </Text>
                    
                    <Text style={generalStyles.desc}>
                        {item.desc ? item.desc : 'No description'}
                    </Text>
                </View>

                <View style={generalStyles.bottomContainer}>
                    <Image source={require('../assets/pp.png')} style={{ width: 32, height: 32 }} />
                    <Text style={[generalStyles.authorTitle, {fontSize: 12}]}>
                        {item.author}
                    </Text>
                </View>

            </TouchableOpacity>
            <Line style={{ backgroundColor: '#ddd' }} />
        </View>
    </>
}

const styles = StyleSheet.create({
    container: { padding: 20 },
    image: { width: 80, height: 45, resizeMode: 'contain' },
})



export default LastFeeds
