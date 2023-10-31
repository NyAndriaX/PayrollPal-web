import {
	FETCH_DATA_IN_SESSION_STORAGE,
	LOGOUT_USER,
	LOGIN_USER,
} from "../../service/authentification/authAction.js";

const authReducer = (state, action) => {
	switch (action.type) {
		case FETCH_DATA_IN_SESSION_STORAGE:
			return {
				...state,
				infosUsers: action.payload?.userData || null,
				isSecureContext: true,
			};
		case LOGOUT_USER:
			state.isSecureContext = false;
			return {
				...state,
				infosUsers: null,
				isSecureContext: true,
			};
		case LOGOUT_USER:
			console.log(action.payload);
		// state.isSecureContext = false;
		// return {
		// 	...state,
		// 	infosUsers: a,
		// 	isSecureContext: true,
		// };
		default:
			return state;
	}
};

export { authReducer };
