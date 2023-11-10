import {
	fetchAllFreelancerService,
	deleteOnePlacementInThisEntrepriseService,
	fetchAllDayDumpByFreelanceService,
	validationDayDumpService,
	refusDayDumpService,
} from "./companyService";
export const FETCH_ALL_FREELANCER = "FETCH_ALL_FREELANCER";
export const DELETE_ONE_FRELANCER_IN_THIS_ENTREPRISE =
	"DELETE_ONE_FRELANCER_IN_THIS_ENTREPRISE";

export const FETCH_ALL_DAY_DUMP_BY_FREELANCE =
	"FETCH_ALL_DAY_DUMP_BY_FREELANCE";
export const VALIDATION_DAY_DUMP = "VALIDATION_DAY_DUMP";
export const REFUS_DAY_DUMP = "REFUS_DAY_DUMP";

export const fetchAllDayDumpByFreelanceAction = async (
	dispatch,
	idEntreprise
) => {
	try {
		const response = await fetchAllDayDumpByFreelanceService(idEntreprise);
		dispatch({
			type: FETCH_ALL_DAY_DUMP_BY_FREELANCE,
			payload: response.data?.result,
		});
	} catch (error) {
		throw error;
	}
};

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

export const validationDayDumpAction = async (
	dispatch,
	idDayDump,
	idPlacement
) => {
	try {
		const response = await validationDayDumpService(idDayDump, idPlacement);
		dispatch({
			type: VALIDATION_DAY_DUMP,
			payload: response?.data.result,
		});
	} catch (error) {
		throw error;
	}
};

export const refusDayDumpAction = async (dispatch, idDayDump, idPlacement) => {
	try {
		const response = await refusDayDumpService(idDayDump, idPlacement);
		dispatch({
			type: REFUS_DAY_DUMP,
			payload: response?.data.result,
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
