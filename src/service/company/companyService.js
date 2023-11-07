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

export { fetchAllFreelancerService, deleteOnePlacementInThisEntrepriseService };
