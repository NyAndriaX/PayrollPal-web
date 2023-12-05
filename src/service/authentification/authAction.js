import jwt_decode from "jwt-decode";
import {
	isEmailAvailableService,
	existenceEmailService,
	signupFreelanceService,
	signupCompanyService,
	isEmailValidService,
	resendValidationCodeService,
	generateAndSendResetTokenService,
	validateResetTokenService,
	resetPasswordService,
	updatedProfilService,
	updatedProfilForCompanyService,
	updatedUserFreelancerService,
	loginService,
} from "./authService";

export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const AVAILABILITY_EMAIL = "AVAILABILITY_EMAIL";
export const UPDATED_PROFIL_ADMIN = "UPDATED_PROFIL_ADMIN";
export const UPDATED_SETTINGS_FREELANCE = "UPDATED_SETTINGS_FREELANCE";
export const FETCH_DATA_IN_SESSION_STORAGE = "FETCH_DATA_IN_SESSION_STORAGE ";

export const isEmailAvailableAction = async (email) => {
	try {
		const response = await isEmailAvailableService(email);
		return response;
	} catch (error) {
		throw error;
	}
};

export const existenceEmailAction = async (email) => {
	try {
		const response = await existenceEmailService(email);
		return response;
	} catch (error) {
		throw error;
	}
};

export const isEmailValidAction = async (data) => {
	try {
		const response = await isEmailValidService(data);
		return response;
	} catch (error) {
		throw error;
	}
};

export const signupFreelanceAction = async (data) => {
	try {
		const response = await signupFreelanceService(data);
		return response;
	} catch (error) {
		throw error;
	}
};
export const signupCompanyAction = async (data) => {
	try {
		const response = await signupCompanyService(data);
		return response;
	} catch (error) {
		throw error;
	}
};

export const loginAction = async (dispatch, data) => {
	try {
		const response = await loginService(data);
		dispatch({
			type: LOGIN_USER,
			payload: response,
		});
		window.location = "/";
	} catch (error) {
		throw error;
	}
};

export const logoutAction = async (dispatch) => {
	try {
		sessionStorage.removeItem("token");
		dispatch({
			type: LOGOUT_USER,
			payload: null,
		});
	} catch (error) {
		throw error;
	}
};
export const resendValidationCodeAction = async (email) => {
	try {
		const result = await resendValidationCodeService(email);
	} catch (error) {
		throw error;
	}
};

export const generateAndSendResetTokenAction = async (email) => {
	try {
		const result = await generateAndSendResetTokenService(email);
		return result;
	} catch (error) {
		throw error;
	}
};

export const validateResetTokenAction = async (token) => {
	try {
		const result = await validateResetTokenService(token);
		return result;
	} catch (error) {
		throw error;
	}
};

export const resetPasswordAction = async (form) => {
	try {
		const result = await resetPasswordService(form);
		return result;
	} catch (error) {
		throw error;
	}
};

export const fetchDataInfosData = async (dispatch) => {
	try {
		const storedToken = sessionStorage.getItem("token");
		if (storedToken) {
			const decodedToken = jwt_decode(storedToken);
			dispatch({
				type: FETCH_DATA_IN_SESSION_STORAGE,
				payload: decodedToken,
			});
		} else {
			dispatch({
				type: FETCH_DATA_IN_SESSION_STORAGE,
				payload: null,
			});
		}
		return null;
	} catch (error) {
		throw error;
	}
};
//Updated settings
export const updatedProfilAction = async (dispatch, formData) => {
	try {
		const result = await updatedProfilService(formData);
		dispatch({
			type: UPDATED_PROFIL_ADMIN,
			payload: result?.data.result,
		});
	} catch (error) {
		throw error;
	}
};

//updated settings company

export const UPDATED_SETTINGS_COMPANY = "UPDATED_SETTINGS_COMPANY";

export const updatedProfilForCompanyAction = async (
	dispatch,
	userId,
	formData
) => {
	try {
		const result = await updatedProfilForCompanyService(userId, formData);
		dispatch({
			type: UPDATED_SETTINGS_COMPANY,
			payload: result?.data.result,
		});
	} catch (error) {
		throw error;
	}
};

export const updatedUserFreelancerAction = async (
	dispatch,
	userId,
	userData
) => {
	try {
		const result = await updatedUserFreelancerService(userId, userData);
		dispatch({
			type: UPDATED_SETTINGS_FREELANCE,
			payload: result?.data.result,
		});
	} catch (error) {
		throw error;
	}
};
