import { FC } from "react"
import { Text, View, StyleSheet, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"

import { style as generalStyles } from '../Config/style'
import Line from "./Line"



type Props = {
    item: any,
    num: number,
    navigation: any
}

const PopularFeeds: FC<Props> = ({ item, num,  navigation}) => {

    return <>
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.navigate('MyStack', {screen: 'Details', params: {item}})}
            style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20 }}>
                <View style={{justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 48, fontWeight: 'bold', color: '#BFC3C9' }}>
                        {num + 1}
                    </Text>
                </View>
                <View style={{ flex: 2, marginLeft: 40, justifyContent: 'center'}}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#22262A', lineHeight: 24 }}>
                        {item.title}
                    </Text>
                    <Text style={[generalStyles.authorTitle, { marginTop: 10 }]}>
                        {item.author}
                    </Text>
                </View>
            </TouchableOpacity>
            <Line style={{backgroundColor: '#ddd'}} />
        </View>
    </>
}

const styles = StyleSheet.create({
    container: { padding: 20 },

})



export default PopularFeeds
