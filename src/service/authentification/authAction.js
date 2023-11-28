import jwt_decode from "jwt-decode";
import {
	isEmailAvailableService,
	existenceEmailService,
	signupFreelanceService,
	isEmailValidService,
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
// export const signupCompanyAction = async (data) => {
// 	try {
// 		await apiUrl.post("/auth/signup/company", data);
// 	} catch (error) {
// 		throw error;
// 	}
// };

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
		const response = await apiUrl.post("/admin/settings", formData);
		dispatch({
			type: UPDATED_PROFIL_ADMIN,
			payload: response?.data.result,
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
		const response = await apiUrl.post(`/company/settings/${userId}`, formData);
		dispatch({
			type: UPDATED_SETTINGS_COMPANY,
			payload: response?.data.result,
		});
	} catch (error) {
		throw error;
	}
};

export const updatedSettingsUserFreelancerAction = async (
	dispatch,
	userId,
	userData
) => {
	try {
		const response = await apiUrl.post(
			`/freelance/settings/${userId}`,
			userData
		);
		dispatch({
			type: UPDATED_SETTINGS_FREELANCE,
			payload: response?.data.result,
		});
	} catch (error) {
		throw error;
	}
};
export const updatedUserFreelancerAction = async (userId, userData) => {
	console.log(userData, userId);
	try {
		await apiUrl.post(`/freelance/settings/${userId}`, userData);
	} catch (error) {
		throw error;
	}
};
// export const checkedPasswordAction = (data) => {
// 	return async (dispatch) => {
// 		try {
// 			const data = await checkedPasswordService(data);
// 			dispatch({
// 				type: AUTH_CHECKED_PASSWORD,
// 				payload: data,
// 			});
// 		} catch (error) {
// 			console.error(
// 				"Erreur de la validation du mot de passe de l'utilisateur:",
// 				error
// 			);
// 		}
// 	};
// };

// export const signupCompanyAction = (data) => {
// 	return async (dispatch) => {
// 		try {
// 			const data = await signupCompanyService(data);
// 			dispatch({
// 				type: AUTH_SIGNUP_COMPANY,
// 				payload: data,
// 			});
// 		} catch (error) {
// 			console.error("Erreur de l'enregistrement de l'entreprise:", error);
// 		}
// 	};
// };

// export const signupFreelanceAction = (data) => {
// 	return async (dispatch) => {
// 		try {
// 			const data = await signupFreelanceService(data);
// 			dispatch({
// 				type: AUTH_SIGNUP_FREELANCE,
// 				payload: data,
// 			});
// 		} catch (error) {
// 			console.error("Erreur de l'enregistrement de la freelance:", error);
// 		}
// 	};
// };
