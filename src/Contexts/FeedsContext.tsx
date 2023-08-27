import { createContext, useContext, useState, FC, useEffect } from "react";


// i use any type everywhere because i don't have time to write types for this project
// this error type is not important for now.
const Context = createContext();


type Props = {
	children: React.ReactNode
}

const Provider: FC<Props> = ({ children }) => {

	const [feeds, setFeeds] = useState([]);
	const [favorites, setFavorites] = useState([]);
	const [loading, setLoading] = useState(true);

	const getFeeds = async () => {
		try {
			const response = await fetch('http://192.168.1.220:5000/api/feeds');
			const data = await response.json();
			setFeeds(data);
			setLoading(false);
		} catch (error) {
			console.log(error);
		}
	}

	const searchFeeds = async (search: string) => {
		try {
			const response = await fetch(`http://192.168.1.220:5000/api/feeds?search=${search}`);
			const data = await response.json();
			setLoading(false);

			return data;
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		getFeeds();
	}, [])


	const values = {
		feeds,
		setFeeds,
		favorites,
		setFavorites,
		loading,
		setLoading,
		searchFeeds
	}

	return (
		<Context.Provider value={values}>
			{children}
		</Context.Provider>
	);
}

export const useFeeds = () => useContext(Context);

export default Provider;
