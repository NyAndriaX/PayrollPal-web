import {
	FETCH_ALL_FREELANCER,
	DELETE_ONE_FRELANCER_IN_THIS_ENTREPRISE,
	FETCH_ALL_DAY_DUMP_BY_FREELANCE,
} from "../../../service/company/companyAction";

const companyDashboardReducer = (state, action) => {
	switch (action.type) {
		case FETCH_ALL_FREELANCER:
			return {
				...state,
				nbrFreelancer: action.payload.length,
				freelances: action.payload,
			};
		case DELETE_ONE_FRELANCER_IN_THIS_ENTREPRISE:
			const afterDeleteActionPlacement = state.freelances.filter(
				(item) => item._id !== action.payload?.placementId
			);
			return {
				...state,
				nbrFreelancer: state.nbrFreelancer - 1,
				freelances: afterDeleteActionPlacement,
			};
		case FETCH_ALL_DAY_DUMP_BY_FREELANCE:
			let sum = 0;
			action.payload.map((item) => {
				sum = sum + item._doc?.nbrDeJours;
			});
			return {
				...state,
				nrbDayValidity: sum,
			};
		default:
			return state;
	}
};

export { companyDashboardReducer };
