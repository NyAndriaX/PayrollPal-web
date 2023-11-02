import {
	FETCH_LIST_PLACEMENT,
	FETCH_LIST_FREELANCE,
	FETCH_LIST_COMPANY,
	ADD_NEW_PLACEMENT,
	DELETE_PLACEMENT,
	PUT_PLACEMENT,
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
		case ADD_NEW_PLACEMENT:
			return {
				...state,
				placementData: [...state.placementData, action.payload],
			};
		case DELETE_PLACEMENT:
			const newDataPlacementDelete = state.placementData.filter(
				(item) => item._id !== action.payload
			);
			return {
				...state,
				placementData: newDataPlacementDelete,
			};
		case PUT_PLACEMENT:
			const updatedPlacementData = state.placementData.map((item) => {
				if (item._id === action.payload._id) {
					return action.payload;
				} else {
					return item;
				}
			});
			return {
				...state,
				placementData: updatedPlacementData,
			};

		default:
			return state;
	}
};

export { placementReducer };
