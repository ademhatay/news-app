import { createContext, useContext, useState, FC, useEffect } from "react";
import { data } from "./data";


const Context = createContext();


type Props = {
	children: React.ReactNode
}

const Provider: FC<Props> = ({ children }) => {

	const [feeds, setFeeds] = useState(data);


	const values = {
		feeds,
		setFeeds
	}

	return (
		<Context.Provider value={values}>
			{children}
		</Context.Provider>
	);
}

export const useFeeds = () => useContext(Context);

export default Provider;
