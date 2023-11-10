import { apiUrl } from "../../config/apiUrl";

const fetchDayDumpInThisMonthService = async (placementId) => {
	try {
		const response = await apiUrl.get(`/freelance/dayValidity/${placementId}`);
		return response;
	} catch (error) {
		throw error;
	}
};

const fetchPlacementByFreelanceIdService = async (idFreelance) => {
	try {
		const response = await apiUrl.get(`/freelance/${idFreelance}`);
		return response;
	} catch (error) {
		throw error;
	}
};
const depositDayDumpService = async (data) => {
	try {
		const response = await apiUrl.post("/freelance/depositDayValidity", data);
		return response;
	} catch (error) {
		throw error;
	}
};

export {
	fetchDayDumpInThisMonthService,
	fetchPlacementByFreelanceIdService,
	depositDayDumpService,
};
