import {
	FETCH_LIST_PLACEMENT,
	FETCH_LIST_FREELANCE,
	FETCH_LIST_COMPANY,
} from "../../../service/admin/adminAction";

const placementReducer = (state, action) => {
	switch (action.type) {
		case FETCH_LIST_PLACEMENT:
			return {
				...state,
				placementData: action.payload,
			};
		case FETCH_LIST_FREELANCE:
			return {
				...state,
				freelanceData: action.payload,
			};
		case FETCH_LIST_COMPANY:
			return {
				...state,
				companyData: action.payload,
			};
		// case VALIDATE_USER_FREELANCE:
		// 	const initUpdateData = Object.values(state);
		// 	const updatedData = initUpdateData.filter(
		// 		(item) => item._id !== action.payload
		// 	);

		// 	return updatedData;
		// case DELETE_USER_FREELANCE_WAIT:
		// 	const initDeleteData = Object.values(state);
		// 	const deleteData = initDeleteData.filter(
		// 		(item) => item._id !== action.payload
		// 	);

		// 	return deleteData;
		default:
			return state;
	}
};

export { placementReducer };
