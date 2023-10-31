import {
	FETCH_UNVALIDATED_USERS_FREELANCE,
	VALIDATE_USER_FREELANCE,
	DELETE_USER_FREELANCE_WAIT,
} from "../../../service/admin/adminAction";

const freelWaitReducer = (state, action) => {
	switch (action.type) {
		case FETCH_UNVALIDATED_USERS_FREELANCE:
			return {
				...state,
				...action.payload.result,
			};
		case VALIDATE_USER_FREELANCE:
			const initUpdateData = Object.values(state);
			const updatedData = initUpdateData.filter(
				(item) => item._id !== action.payload
			);

			return updatedData;
		case DELETE_USER_FREELANCE_WAIT:
			const initDeleteData = Object.values(state);
			const deleteData = initDeleteData.filter(
				(item) => item._id !== action.payload
			);

			return deleteData;
		default:
			return state;
	}
};

export { freelWaitReducer };
