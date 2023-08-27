import React, { FC } from 'react'
import { Image, StyleSheet, Text, View, ScrollView } from 'react-native'
import Screen from './Screen'

import { style as generalStyles } from '../Config/style'
import Buttons from '../Components/Buttons'

type Props = {
    [x: string]: any
}

const Details: FC<Props> = ({ route, navigation }) => {

    const { item } = route.params;

    return <>
        <Screen>
            <ScrollView style={styles.container}>
                <View style={styles.wrapper}>
                    { item.image ?  <Image source={{ uri: item?.image }} style={styles.image} /> : <Text style={{fontSize: 48, fontWeight: 'bold', color: '#BFC3C9', textAlign: 'center', marginTop: 20}}>No Image</Text>}
                    <View style={{ padding: 20 }}>
                        <Text style={generalStyles.title}>
                            {item?.title}
                        </Text>
                        <Text style={generalStyles.desc}>
                            {item.feed ? item.feed : item?.desc ? item?.desc : 'No description'}
                        </Text>
                        <View style={generalStyles.bottomContainer}>
                            <Image source={{uri: item?.authorImage}} style={{ width: 32, height: 32, resizeMode:'contain' }} />
                            <Text style={generalStyles.authorTitle}>
                                {item?.author}
                            </Text>
                        </View>

                    </View>
                </View>
            </ScrollView>
            <Buttons navigation={navigation} item={item} />
        </Screen>
    </>
}

export default Details

const styles = StyleSheet.create({
    container: { flex: 1 },
    wrapper: { flex: 1, backgroundColor: 'white', borderRadius: 10, margin: 20, overflow: 'hidden', marginBottom: 140},
    image: { width: '100%', height: 200, resizeMode: 'cover' },
})
