import React, { FC, useRef, useState } from 'react'
import { Image, StyleSheet, Text, View, ScrollView, Dimensions, Animated } from 'react-native'
import Screen from './Screen'

import { style as generalStyles } from '../Config/style'
import Buttons from '../Components/Buttons'

type Props = {
    [x: string]: any
}

const Details: FC<Props> = ({ route, navigation }) => {
    const { width } = Dimensions.get('window');

    const scrollY = useRef(new Animated.Value(0)).current;
    const [height1, setHeight1] = useState(100)
    const [height2, setHeight2] = useState(100)
    const translateX = scrollY.interpolate({ inputRange: [0, height1 - height2], outputRange: [-width, 0] })


    const { item } = route.params;



    return <>
        <Screen>
            <Animated.ScrollView style={styles.container}
                onContentSizeChange={(_, h) => setHeight1(h)}
                onLayout={e => setHeight2(e.nativeEvent.layout.height)}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    {
                        useNativeDriver: false,
                    },
                )}
            >
                <View style={styles.wrapper}>
                    {item.image ? <Image source={{ uri: item?.image }} style={styles.image} /> : <Text style={{ fontSize: 48, fontWeight: 'bold', color: '#BFC3C9', textAlign: 'center', marginTop: 20 }}>No Image</Text>}
                    <View style={{ padding: 20 }}>
                        <Text style={generalStyles.title}>
                            {item?.title}
                        </Text>
                        <Text style={generalStyles.desc}>
                            {item.feed ? item.feed : item?.desc ? item?.desc : 'No description'}
                        </Text>
                        <View style={generalStyles.bottomContainer}>
                            <Image source={{ uri: item?.authorImage }} style={{ width: 32, height: 32, resizeMode: 'contain' }} />
                            <Text style={generalStyles.authorTitle}>
                                {item?.author}
                            </Text>
                        </View>
                    </View>
                </View>
            </Animated.ScrollView>
            <Buttons navigation={navigation} item={item} />
            <Animated.View style={[styles.bar, { transform: [{ translateX }] }]} />
        </Screen>
    </>
}

export default Details

const styles = StyleSheet.create({
    container: { flex: 1 },
    wrapper: { flex: 1, backgroundColor: 'white', borderRadius: 10, margin: 20, overflow: 'hidden', marginBottom: 140 },
    image: { width: '100%', height: 200, resizeMode: 'cover' },
    bar: { position: 'absolute', bottom: 0, left: 0, right: 0, height: 10, backgroundColor: '#FFC700' }
})
