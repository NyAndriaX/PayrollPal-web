import {
	FETCH_ALL_USERS,
	FILTER_DATA_IN_FREELANCE,
	FILTER_DATA_IN_COMPANY,
	SEE_ALL_DATA,
	DELETE_USER,
} from "../../../service/admin/adminAction";

const dashboardReducer = (state, action) => {
	switch (action.type) {
		case FETCH_ALL_USERS:
			const freelanceUsers = action.payload?.filter(
				(user) => user.roles === "ROLES_FREELANCE"
			);
			const companyUsers = action.payload.filter(
				(user) => user.roles === "ROLES_COMPANY"
			);
			return {
				...state,
				notTouchUsersdata: action.payload,
				allUsers: action.payload,
				nbrFreelance: freelanceUsers.length,
				nbrCompany: companyUsers.length,
			};
		case FILTER_DATA_IN_FREELANCE:
			const dataFreelance = state.notTouchUsersdata?.filter(
				(user) => user.roles === "ROLES_FREELANCE"
			);
			return {
				...state,
				allUsers: dataFreelance || [],
			};

		case FILTER_DATA_IN_COMPANY:
			const dataCompany = state.notTouchUsersdata?.filter(
				(user) => user.roles === "ROLES_COMPANY"
			);
			return {
				...state,
				allUsers: dataCompany,
			};
		case SEE_ALL_DATA:
			return {
				...state,
				allUsers: state.notTouchUsersdata,
			};
		case DELETE_USER:
			const { userId, userRoles } = action.payload;
			let newNbrCompany = state.nbrCompany;
			let newNbrFreelance = state.nbrFreelance;
			if (userRoles === "ROLES_FREELANCE") {
				newNbrFreelance = newNbrFreelance - 1;
			} else {
				newNbrCompany = newNbrCompany - 1;
			}
			const dataAfterDeleteNotTouch = state.notTouchUsersdata?.filter(
				(user) => user._id !== userId && user.roles === userRoles
			);
			const dataAfterDeleteAllUsers = state.allUsers?.filter(
				(user) => user._id !== userId && user.roles === userRoles
			);
			return {
				...state,
				allUsers: dataAfterDeleteAllUsers,
				notTouchUsersdata: dataAfterDeleteNotTouch,
				nbrCompany: newNbrCompany,
				nbrFreelance: newNbrFreelance,
			};
		default:
			return state;
	}
};

export { dashboardReducer };
