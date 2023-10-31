import React, { createContext, useContext, useReducer } from "react";
import {
	checkedEmailAction,
	loginAction,
	fetchDataInfosData,
	logoutAction,
} from "../../service/authentification/authAction.js";
import { authReducer } from "./userReducer.js";

const initialState = {
	infosUsers: null,
	isSecureContext: false,
};
const UserContext = createContext();

const UserProvider = ({ children }) => {
	const [data, dispatch] = useReducer(authReducer, initialState);

	React.useEffect(() => {
		fetchDataInfosData(dispatch);
	}, []);

	return (
		<UserContext.Provider
			value={{
				data,
				checkedEmail: (email) => checkedEmailAction(dispatch, email),
				login: (userData) => loginAction(dispatch, userData),
				logout: () => logoutAction(dispatch),
			}}>
			{children}
		</UserContext.Provider>
	);
};

export const useUserData = () => {
	return useContext(UserContext);
};

export { UserContext, UserProvider };
