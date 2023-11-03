import { apiUrl } from "../../config/apiUrl";
export const fetchUnvalidatedUsers = async () => {
	try {
		const response = await apiUrl.get("/admin/user/unvalidated-freelancers");
		const data = response.data;
		return data;
	} catch (error) {
		throw error;
	}
};

export const validateFreelanceService = async (userId) => {
	try {
		const response = await apiUrl.get(
			`/admin/user/unvalidated-freelancers/${userId}`
		);
		return response;
	} catch (error) {
		throw error;
	}
};

export const deleteFreelanceWaitService = async (userId) => {
	try {
		const response = await apiUrl.delete(
			`/admin/user/unvalidated-freelancers/${userId}`
		);
		return response;
	} catch (error) {
		throw error;
	}
};

export const fetchAllUsersService = async () => {
	try {
		const response = await apiUrl.get("/admin/user/all-users");
		return response;
	} catch (error) {
		throw error;
	}
};

export const deleteUserService = async (userId, userRoles) => {
	try {
		const response = await apiUrl.delete(
			`/admin/user/all-users/${userId}/${userRoles}`
		);
		return response;
	} catch (error) {
		throw error;
	}
};

export const updateProfilService = async (formData) => {
	try {
		const response = await apiUrl.post("/admin/settings", formData);
		return response;
	} catch (error) {
		throw error;
	}
};

//Service sur le placement

export const fetchListPlacementService = async () => {
	try {
		const response = await apiUrl.get("/admin/placement");
		return response;
	} catch (error) {
		throw error;
	}
};

export const fetchListFreelanceService = async () => {
	try {
		const response = await apiUrl.get("/admin/user/freelance-user");
		return response;
	} catch (error) {
		throw error;
	}
};

export const fetchListCompanyService = async () => {
	try {
		const response = await apiUrl.get("/admin/user/company-user");
		return response;
	} catch (error) {
		throw error;
	}
};

export const addNewPlacementService = async (data) => {
	try {
		const response = await apiUrl.post("/admin/placement", data);
		return response;
	} catch (error) {
		throw error;
	}
};

export const deletePlacementService = async (placementId) => {
	try {
		const response = await apiUrl.delete(`/admin/placement/${placementId}`);
		return response;
	} catch (error) {
		throw error;
	}
};

export const putPlacementService = async (formData, placementId) => {
	try {
		const response = await apiUrl.put(
			`/admin/placement/${placementId}`,
			formData
		);
		return response;
	} catch (error) {
		throw error;
	}
};

//SERVICE : CREATE user of company

export const createNewCompanyService = async (formData) => {
	try {
		const response = await apiUrl.post(`/admin/company`, formData);
		return response;
	} catch (error) {
		throw error;
	}
};

export const fecthDataUserAllCompanyService = async () => {
	try {
		const response = await apiUrl.get("/admin/company");
		return response;
	} catch (error) {
		throw error;
	}
};

export const updateUserCompany = async (userId, formData) => {
	try {
		const response = await apiUrl.put(`/admin/company/${userId}`, formData);
		return response;
	} catch (error) {
		throw error;
	}
};
