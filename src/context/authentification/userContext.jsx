import React, { createContext, useContext, useReducer } from "react";
import {
	loginAction,
	//new url
	isEmailAvailableAction,
	existenceEmailAction,
	signupFreelanceAction,
	isEmailValidAction,
	fetchDataInfosData,
	logoutAction,
	updatedProfilAction,
	updatedProfilForCompanyAction,
	updatedUserFreelancerAction,
	updatedSettingsUserFreelancerAction,
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
				logout: () => logoutAction(dispatch),
				login: (userData) => loginAction(dispatch, userData),
				signupFreelance: (data) => signupFreelanceAction(data),
				existenceEmail: (email) => existenceEmailAction(email),
				isEmailAvailable: (email) => isEmailAvailableAction(email),
				//not verifier
				updatedProfilForCompany: (userId, formData) =>
					updatedProfilForCompanyAction(dispatch, userId, formData),
				updatedProfil: (formData) => updatedProfilAction(dispatch, formData),
				updatedSettingsUserFreelancer: (userId, userData) =>
					updatedSettingsUserFreelancerAction(dispatch, userId, userData),
				updatedUserFreelancerAction: (userId, userData) =>
					updatedUserFreelancerAction(userId, userData),
				isEmailValid: (data) => isEmailValidAction(data),
				//new url
			}}>
			{children}
		</UserContext.Provider>
	);
};

export const useUserData = () => {
	return useContext(UserContext);
};

export { UserContext, UserProvider };
