import React, { FC, useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import Screen from './Screen'
import { useFeeds } from '../Contexts/FeedsContext'
import { Indicator, PopularFeeds } from '../Components'

type Props = {
    [x: string]: any
}

const SearchScreen: FC<Props> = ({ navigation }) => {

    const [search, setSearch] = useState('')
    const [filteredData, setFilteredData] = useState([])
    const { searchFeeds, loading, setLoading }: any = useFeeds();


    useEffect(() => {
        if (search) {
            setLoading(true)
            searchFeeds(search).then((res: any) => {
                setFilteredData(res);
                setLoading(false)
            })
        }
    }, [search])


    return <>
        <Screen>
            <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={styles.container}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                        <TextInput style={{ width: '80%', height: 50, backgroundColor: '#F5F5F5', borderRadius: 10, paddingLeft: 20, borderWidth: 0.5 }} placeholder="Search" onChangeText={(text) => setSearch(text)} />
                    </View>
                    {
                        loading ? <Indicator />
                        : !filteredData.length && search ? <Text style={{ fontSize: 48, fontWeight: 'bold', color: '#BFC3C9', textAlign: 'center', marginTop: 20 }}>No Result</Text>
                            : !search ? <Text style={{ fontSize: 48, fontWeight: 'bold', color: '#BFC3C9', textAlign: 'center', marginTop: 20 }}>Search</Text>
                                : filteredData.map((item: any, index: number) => {
                                    return <PopularFeeds num={index} key={index} item={item} navigation={navigation} />
                                })
                    }

                </View>
            </ScrollView>
        </Screen>
    </>
}

export default SearchScreen

const styles = StyleSheet.create({
    container: { flex: 1, paddingTop: 50, paddingBottom: 100 }
})
