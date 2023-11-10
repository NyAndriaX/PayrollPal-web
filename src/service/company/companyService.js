import { apiUrl } from "../../config/apiUrl";

const fetchAllFreelancerService = async (idEntreprise) => {
	try {
		const response = await apiUrl.get(
			`/company/all-freelancers/${idEntreprise}`
		);
		return response;
	} catch (error) {
		throw error;
	}
};

const deleteOnePlacementInThisEntrepriseService = async (
	idEntreprise,
	idFreelance
) => {
	try {
		const result = apiUrl.delete(
			`/company/freelancer/${idEntreprise}/${idFreelance}`
		);
		return result;
	} catch (error) {
		throw error;
	}
};
const fetchAllDayDumpByFreelanceService = async (idEntreprise) => {
	try {
		const response = apiUrl.get(`/company/dayValidity/${idEntreprise}`);
		return response;
	} catch (error) {
		throw error;
	}
};
const validationDayDumpService = async (idDayDump, idPlacement) => {
	try {
		const response = apiUrl.get(
			`/company/validationDeJours/${idDayDump}/${idPlacement}`
		);
		return response;
	} catch (error) {
		throw error;
	}
};
const refusDayDumpService = async (idDayDump, idPlacement) => {
	try {
		const response = apiUrl.get(
			`/company/refusDeJours/${idDayDump}/${idPlacement}`
		);
		return response;
	} catch (error) {
		throw error;
	}
};

export {
	fetchAllFreelancerService,
	deleteOnePlacementInThisEntrepriseService,
	fetchAllDayDumpByFreelanceService,
	validationDayDumpService,
	refusDayDumpService,
};
