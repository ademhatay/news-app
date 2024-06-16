import { createContext, useContext, useState, FC, useEffect } from "react";
import { getLocales } from 'expo-localization';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { data, FeedData, searchData } from "./data";

// i use any type everywhere because i don't have time to write types for this project
// this error type is not important for now.
const Context = createContext();


type Props = {
	children: React.ReactNode
}

const Provider: FC<Props> = ({ children }) => {

	const [feeds, setFeeds] = useState<FeedData[]>([]);
	const [favorites, setFavorites] = useState([]);
	const [loading, setLoading] = useState(true);

	const [language, setLanguage] = useState('');



	// get localstorage language
	const getLanguage = async () => {
		const language = await AsyncStorage.getItem('language');
		if (language !== null && language !== undefined) {
			setLanguage(language);
		} else {
			const locales = getLocales();
			setLanguage(locales[0].languageCode);
		}
	}
	useEffect(() => {
		getLanguage();
		getFeeds();
	}, [])





	// language



	const getFeeds = () => {
		const filtered = language ? data.filter((item: FeedData) => item.lang === language) : data;
		setFeeds(filtered);
		setLoading(false);
	  };

	  const searchFeeds = (search:any) => {
		const filtered = searchData(search, data);
		setFeeds(filtered);
		setLoading(false);
	  };
	const values = {
		getFeeds,
		feeds,
		setFeeds,
		favorites,
		setFavorites,
		loading,
		setLoading,
		searchFeeds,
		language,
		setLanguage
	}

	return (
		<Context.Provider value={values}>
			{children}
		</Context.Provider>
	);
}

export const useFeeds = () => useContext(Context);

export default Provider;
