import { createContext, useContext, useState, FC, useEffect } from "react";
import { data } from "./data";



// i use any type everywhere because i don't have time to write types for this project
// this error type is not important for now.
const Context = createContext();


type Props = {
	children: React.ReactNode
}

const Provider: FC<Props> = ({ children }) => {

	const [feeds, setFeeds] = useState(data);
	const [favorites, setFavorites] = useState([]);


	const values = {
		feeds,
		setFeeds,
		favorites,
		setFavorites
	}

	return (
		<Context.Provider value={values}>
			{children}
		</Context.Provider>
	);
}

export const useFeeds = () => useContext(Context);

export default Provider;
