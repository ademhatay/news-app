import React, { useRef } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { PanResponder } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFeeds } from '../Contexts/FeedsContext';


type Props = {
    navigation: any,
    item: any
}

export default function Buttons({ navigation, item }: Props) {


    const {favorites, setFavorites}: any = useFeeds();

    const leftPosition = useRef(new Animated.Value(0)).current;
    const rightPosition = useRef(new Animated.Value(0)).current;

    const maxSlideDistance = 100;

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (e, gestureState) => {
            if (gestureState.dx > 0) {
                if (gestureState.dx <= maxSlideDistance) {
                    rightPosition.setValue(-gestureState.dx);
                } else {
                    rightPosition.setValue(-maxSlideDistance);
                }
            } else if (gestureState.dx < 0) {
                if (gestureState.dx >= -maxSlideDistance) {
                    leftPosition.setValue(gestureState.dx);
                } else {
                    leftPosition.setValue(-maxSlideDistance);
                }
            }
        },
        onPanResponderRelease: (e, gestureState) => {
            Animated.spring(leftPosition, {
                toValue: 0,
                useNativeDriver: false
            }).start();

            Animated.spring(rightPosition, {
                toValue: 0,
                useNativeDriver: false
            }).start();

            if (gestureState.dx > 0 && gestureState.dx > 50) {
                // push to favorite list but save other data
                setFavorites([
                    ...favorites,
                    item
                ]);

                navigation.navigate('Favorite')
            }
            else if (gestureState.dx < 0 && gestureState.dx < -50) {
                navigation.goBack();
            }

        }
    });

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.left, { left: leftPosition }]} {...panResponder.panHandlers}>
                <Ionicons name="ios-arrow-back" size={35} color="white" />
            </Animated.View>

            <Animated.View style={[styles.right, { right: rightPosition }]} {...panResponder.panHandlers}>
                <Ionicons name="ios-heart" size={35} color="white" />
            </Animated.View>
        </View>
    );
}

// Rest of styles here
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 70,
        width: '100%',
        padding: 20
    },
    left: {
        marginRight: 30,
        backgroundColor: '#005D99',
        width: 50,
        height: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    right: {
        marginLeft: 30,
        backgroundColor: 'red',
        width: 50,
        height: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
