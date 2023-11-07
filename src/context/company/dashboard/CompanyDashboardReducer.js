import {
	FETCH_ALL_FREELANCER,
	DELETE_ONE_FRELANCER_IN_THIS_ENTREPRISE,
} from "../../../service/company/companyAction";

const companyDashboardReducer = (state, action) => {
	switch (action.type) {
		case FETCH_ALL_FREELANCER:
			console.log(action.payload);
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
		default:
			return state;
	}
};

export { companyDashboardReducer };
