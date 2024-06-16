import React, { FC, useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import AppModal from './AppModal';

import { t } from '../lang/_i18n'
import { useFeeds } from '../Contexts/FeedsContext';

type Props = {
    navigation: any
}

const Header: FC<Props> = ({ navigation }) => {

    const { language }: any = useFeeds();

    const [modalVisible, setModalVisible] = useState(false)

    const navigatePage = (page: string) => {
        navigation.navigate(page)
        setModalVisible(!modalVisible)
    }

    return <>
        <View style={styles.container}>
            <Image source={require('../assets/bg.png')} style={{ width: 40, height: 40, padding: 5, resizeMode: 'contain' }} />
            <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Ionicons name="menu" size={32} color="white" />
            </TouchableOpacity>
        </View>
        <AppModal modalVisible={modalVisible} setModalVisible={setModalVisible}>
            <TouchableOpacity
                onPress={navigatePage.bind(null, 'Home')}
                style={styles.itemContainer}>
                <Ionicons name="ios-home" size={24} color="#005D99" />
                <Text style={styles.itemTitle}>
                    {t('home', {locale: language})}
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={navigatePage.bind(null, 'Search')}
                style={styles.itemContainer}>
                <Ionicons name="ios-search" size={24} color="#005D99" />
                <Text style={styles.itemTitle}>
                    {t('search', {locale: language})}
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={navigatePage.bind(null, 'Favorite')}
                style={styles.itemContainer}>
                <Ionicons name="ios-heart" size={24} color="#005D99" />
                <Text style={styles.itemTitle}>
                    {t('favorites', {locale: language})}
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={navigatePage.bind(null, 'Settings')}
                style={styles.itemContainer}>
                <Ionicons name="ios-settings" size={24} color="#005D99" />
                <Text style={styles.itemTitle}>
                    {t('settings', {locale: language})}
                </Text>
            </TouchableOpacity>

            <View style={styles.line} />
            <TouchableOpacity style={styles.itemContainer}>
                <Ionicons name="ios-log-in" size={24} color="#005D99" />
                <Text style={styles.itemTitle}>
                    {t('login', {locale: language})}
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.itemContainer}>
                <Ionicons name="ios-person-add" size={24} color="#005D99" />
                <Text style={styles.itemTitle}>
                    {t('register', {locale: language})}
                </Text>
            </TouchableOpacity>
            <View style={styles.line} />
            <TouchableOpacity style={[styles.itemContainer, { backgroundColor: '#393E46', borderRadius: 15, paddingVertical: 5 }]} onPress={() => setModalVisible(!modalVisible)}>
                <Ionicons name="ios-close" size={24} color="white" />
                <Text style={[styles.itemTitle, { color: 'white' }]}>
                    {t('close', {locale: language})}
                </Text>
            </TouchableOpacity>
        </AppModal>
    </>
}



export default Header

const styles = StyleSheet.create({
    container: {
        height: 60,
        backgroundColor: '#005D99',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    line: { borderBottomColor: '#005D99', borderBottomWidth: 1, marginVertical: 10 },
    itemContainer: { flexDirection: 'row', justifyContent: 'center', marginVertical: 10, alignItems: 'center' },
    itemTitle: { fontSize: 16, fontWeight: 'bold', marginLeft: 5 },
})
