import {
	fetchAllFreelancerService,
	deleteOnePlacementInThisEntrepriseService,
} from "./companyService";
export const FETCH_ALL_FREELANCER = "FETCH_ALL_FREELANCER";
export const DELETE_ONE_FRELANCER_IN_THIS_ENTREPRISE =
	"DELETE_ONE_FRELANCER_IN_THIS_ENTREPRISE";

export const fetchAllFreelancerAction = async (dispatch, idEntreprise) => {
	try {
		const response = await fetchAllFreelancerService(idEntreprise);
		dispatch({
			type: FETCH_ALL_FREELANCER,
			payload: response.data?.result,
		});
	} catch (error) {
		throw error;
	}
};

export const deleteOnePlacementInThisEntrepriseAction = async (
	dispatch,
	idEntreprise,
	idFreelance
) => {
	try {
		const response = await deleteOnePlacementInThisEntrepriseService(
			idEntreprise,
			idFreelance
		);
		dispatch({
			type: DELETE_ONE_FRELANCER_IN_THIS_ENTREPRISE,
			payload: response.data?.result,
		});
	} catch (error) {
		throw error;
	}
};
