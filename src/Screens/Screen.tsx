import { ReactNode, FC } from 'react'
import { SafeAreaView, StyleSheet, Platform, StatusBar } from 'react-native'
import Constants from 'expo-constants';
import { Header } from '../Components';
import { useNavigation } from '@react-navigation/native';


const styles = StyleSheet.create({
	screen: {
		// paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
		flex: 1,
	}
});

type Props = {
    children: ReactNode,
    style?: object
 }


const Screen: FC<Props> = ({ children, style }) => {

	const navigation = useNavigation()
	return <>
		<SafeAreaView style={[styles.screen, style]}>
			<StatusBar backgroundColor="#fff" barStyle="dark-content" />
			<Header navigation={navigation} />
			{children}
		</SafeAreaView>
	</>
}

export default Screen
