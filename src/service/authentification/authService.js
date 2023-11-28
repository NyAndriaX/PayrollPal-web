import { apiUrl } from "../../config/apiUrl";
import jwt_decode from "jwt-decode";

const isEmailAvailableService = async (email) => {
	try {
		const result = await apiUrl.get(`/auth/${email}/availability`);
		return result;
	} catch (error) {
		throw error;
	}
};

const existenceEmailService = async (email) => {
	try {
		const result = await apiUrl.get(`/auth/${email}/existence`);
		return result;
	} catch (error) {
		throw error;
	}
};
const signupFreelanceService = async (data) => {
	try {
		const result = await apiUrl.post("/auth/signup/freelancer", data);
		return result;
	} catch (error) {
		throw error;
	}
};

const isEmailValidService = async (data) => {
	try {
		const result = await apiUrl.post("/isEmailValid", data);
		return result;
	} catch (error) {
		throw error;
	}
};

const loginService = async (data) => {
	try {
		const result = await apiUrl.post("/auth/login", data);
		const token = result.data?.result;
		sessionStorage.setItem("token", token);
		const decodedToken = jwt_decode(token);
		return decodedToken;
	} catch (error) {
		throw error;
	}
};

export {
	isEmailAvailableService,
	existenceEmailService,
	signupFreelanceService,
	isEmailValidService,
	loginService,
};
