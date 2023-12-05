import React, { createContext, useContext, useReducer } from "react";
import {
	loginAction,
	resendValidationCodeAction,
	generateAndSendResetTokenAction,
	validateResetTokenAction,
	resetPasswordAction,
	//new url
	isEmailValidAction,
	isEmailAvailableAction,
	existenceEmailAction,
	signupFreelanceAction,
	signupCompanyAction,
	fetchDataInfosData,
	logoutAction,
	updatedProfilAction,
	updatedProfilForCompanyAction,
	updatedUserFreelancerAction,
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
				signupCompany: (data) => signupCompanyAction(data),
				resendValidationCode: (email) => resendValidationCodeAction(email),
				login: (userData) => loginAction(dispatch, userData),
				signupFreelance: (data) => signupFreelanceAction(data),
				existenceEmail: (email) => existenceEmailAction(email),
				isEmailValid: (data) => isEmailValidAction(data),
				isEmailAvailable: (email) => isEmailAvailableAction(email),
				generateAndSendResetToken: (email) =>
					generateAndSendResetTokenAction(email),
				validateResetToken: (token) => validateResetTokenAction(token),
				resetPassword: (form) => resetPasswordAction(form),
				//not verifier
				updatedProfilForCompany: (userId, formData) =>
					updatedProfilForCompanyAction(dispatch, userId, formData),
				updatedProfil: (formData) => updatedProfilAction(dispatch, formData),
				updatedUserFreelancer: (userId, userData) =>
					updatedUserFreelancerAction(dispatch, userId, userData),
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
