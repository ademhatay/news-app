import { ReactNode, FC } from 'react'
import { SafeAreaView, StyleSheet, Platform } from 'react-native'
import Constants from 'expo-constants';
import { Header } from '../Components';

const styles = StyleSheet.create({
	screen: {
		paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
		flex: 1,
	}
});

type Props = {
    children: ReactNode,
    style?: object
 }


const Screen: FC<Props> = ({ children, style }) => {
	return <>
		<SafeAreaView style={[styles.screen, style]}>
			<Header />
			{children}
		</SafeAreaView>
	</>
}

export default Screen
