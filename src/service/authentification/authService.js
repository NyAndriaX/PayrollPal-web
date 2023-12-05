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

const signupCompanyService = async (data) => {
	try {
		const result = await apiUrl.post("/auth/signup/company", data);
		return result;
	} catch (error) {
		throw error;
	}
};

const isEmailValidService = async (data) => {
	try {
		const result = await apiUrl.post("/auth/isEmailValid", data);
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
const resendValidationCodeService = async (email) => {
	try {
		await apiUrl.get(`/auth/${email}/resend-validation-code`);
	} catch (error) {
		throw error;
	}
};

const generateAndSendResetTokenService = async (email) => {
	try {
		const response = await apiUrl(`/auth/generate-reset-token/${email}`);
		return response;
	} catch (error) {
		throw error;
	}
};
const validateResetTokenService = async (token) => {
	try {
		const response = await apiUrl(`/auth/validate-reset-token/${token}`);
		return response;
	} catch (error) {
		throw error;
	}
};

const resetPasswordService = async (form) => {
	try {
		const response = await apiUrl.post("/auth/reset-password", form);
		return response;
	} catch (error) {
		throw error;
	}
};

const updatedProfilService = async (formData) => {
	try {
		const response = await apiUrl.post("/admin/settings", formData);
		return response;
	} catch (error) {
		throw error;
	}
};
const updatedProfilForCompanyService = async (userId, formData) => {
	try {
		const response = await apiUrl.post(`/company/settings/${userId}`, formData);
		return response;
	} catch (error) {
		throw error;
	}
};

const updatedUserFreelancerService = async (userId, userData) => {
	try {
		const response = await apiUrl.post(
			`/freelance/settings/${userId}`,
			userData
		);
		return response;
	} catch (error) {
		throw error;
	}
};

export {
	isEmailAvailableService,
	existenceEmailService,
	signupFreelanceService,
	signupCompanyService,
	isEmailValidService,
	updatedProfilService,
	loginService,
	resendValidationCodeService,
	generateAndSendResetTokenService,
	validateResetTokenService,
	updatedProfilForCompanyService,
	updatedUserFreelancerService,
	resetPasswordService,
};
