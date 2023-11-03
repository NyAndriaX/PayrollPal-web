import {
	fetchUnvalidatedUsers,
	validateFreelanceService,
	deleteFreelanceWaitService,
	fetchAllUsersService,
	deleteUserService,
	fetchListPlacementService,
	fetchListFreelanceService,
	fetchListCompanyService,
	addNewPlacementService,
	deletePlacementService,
	putPlacementService,
	createNewCompanyService,
	fecthDataUserAllCompanyService,
	updateUserCompany,
} from "./adminService";

// Freelance Waiting
export const FETCH_UNVALIDATED_USERS_FREELANCE = "FETCH_UNVALIDATED_USERS";
export const VALIDATE_USER_FREELANCE = "VALIDATE_USER_FREELANCE";
export const DELETE_USER_FREELANCE_WAIT = "DELETE_USER_FREELANCE_WAIT";

export const fetchUnvalidatedUsersAction = async (dispatch) => {
	try {
		const data = await fetchUnvalidatedUsers();
		dispatch({
			type: FETCH_UNVALIDATED_USERS_FREELANCE,
			payload: data,
		});
	} catch (error) {
		throw error;
	}
};

export const validateFreelanceAction = async (dispatch, userId) => {
	try {
		await validateFreelanceService(userId);
		dispatch({
			type: VALIDATE_USER_FREELANCE,
			payload: userId,
		});
	} catch (error) {
		throw error;
	}
};
export const deleteFreelanceWaitAction = async (dispatch, userId) => {
	try {
		await deleteFreelanceWaitService(userId);
		dispatch({
			type: DELETE_USER_FREELANCE_WAIT,
			payload: userId,
		});
	} catch (error) {
		throw error;
	}
};

//ALl USERS IN A DASHBOARD
export const FETCH_ALL_USERS = "FETCH_ALL_USERS";
export const FILTER_DATA_IN_COMPANY = "FILTER_DATA_IN_COMPANY";
export const FILTER_DATA_IN_FREELANCE = "FILTER_DATA_IN_FREELANCE";
export const SEE_ALL_DATA = "SEE_ALL_DATA";
export const DELETE_USER = "DELETE_USER";

export const fetchAllUsersAction = async (dispatch) => {
	try {
		const response = await fetchAllUsersService();
		const data = response.data.result;
		dispatch({
			type: FETCH_ALL_USERS,
			payload: data,
		});
	} catch (error) {
		throw error;
	}
};

export const filterDataInCompanyAction = async (dispatch) => {
	try {
		dispatch({
			type: FILTER_DATA_IN_COMPANY,
			payload: null,
		});
	} catch (error) {
		throw error;
	}
};
export const filterDataInFreelanceAction = async (dispatch) => {
	try {
		dispatch({
			type: FILTER_DATA_IN_FREELANCE,
			payload: null,
		});
	} catch (error) {
		throw error;
	}
};

export const seeAllDataAction = async (dispatch) => {
	try {
		dispatch({
			type: SEE_ALL_DATA,
			payload: null,
		});
	} catch (error) {
		throw error;
	}
};

export const deleteUserAction = async (dispatch, userId, userRoles) => {
	try {
		await deleteUserService(userId, userRoles);
		dispatch({
			type: DELETE_USER,
			payload: { userId, userRoles },
		});
	} catch (error) {
		throw error;
	}
};

//settings profil
export const UPDATE_PROFIL = "UPDATE_PROFIL";

export const updateProfilAction = async (dispatch, data) => {
	try {
		dispatch({
			type: UPDATE_PROFIL,
			payload: null,
		});
	} catch (error) {
		throw error;
	}
};

//Activiter sur le placement
export const FETCH_LIST_PLACEMENT = "FETCH_LIST_PLACEMENT";
export const FETCH_LIST_COMPANY = "FETCH_LIST_COMPANY";
export const FETCH_LIST_FREELANCE = "FETCH_LIST_FREELANCE";
export const ADD_NEW_PLACEMENT = "ADD_NEW_PLACEMENT";
export const DELETE_PLACEMENT = "DELETE_PLACEMENT";
export const PUT_PLACEMENT = "PUT_PLACEMENT";

export const fetchListPlacementDataAction = async (dispatch) => {
	try {
		const result = await fetchListPlacementService();
		dispatch({
			type: FETCH_LIST_PLACEMENT,
			payload: result?.data.result,
		});
	} catch (error) {
		throw error;
	}
};

export const fetchListFreelanceDataAction = async (dispatch) => {
	try {
		const result = await fetchListFreelanceService();
		dispatch({
			type: FETCH_LIST_FREELANCE,
			payload: result.data.result,
		});
	} catch (error) {
		throw error;
	}
};

export const fetchListCompanyDataAction = async (dispatch) => {
	try {
		const result = await fetchListCompanyService();
		dispatch({
			type: FETCH_LIST_COMPANY,
			payload: result.data.result,
		});
	} catch (error) {
		throw error;
	}
};

export const addNewPlacementAction = async (dispatch, data) => {
	try {
		const result = await addNewPlacementService(data);
		dispatch({
			type: ADD_NEW_PLACEMENT,
			payload: result.data.result,
		});
	} catch (error) {
		throw error;
	}
};

export const deletePlacementAction = async (dispatch, placementId) => {
	try {
		const result = await deletePlacementService(placementId);
		dispatch({
			type: DELETE_PLACEMENT,
			payload: placementId,
		});
	} catch (error) {
		throw error;
	}
};

export const putPlacementAction = async (dispatch, formData, placementId) => {
	try {
		const result = await putPlacementService(formData, placementId);
		dispatch({
			type: PUT_PLACEMENT,
			payload: result.data.result,
		});
	} catch (error) {
		throw error;
	}
};

//ACTION : Create user of company
export const CREATE_NEW_COMPANY = "CREATE_NEW_COMPANY";
export const FECTH_DATA_USER_ALL_COMPANY = "FECTH_DATA_USER_ALL_COMPANY";
export const DELETE_USER_COMPANY = "DELETE_USER_COMPANY";
export const UPDATE_USER_COMPANY = "UPDATE_USER_COMPANY";

export const createNewCompanyAction = async (dispatch, formData) => {
	try {
		const result = await createNewCompanyService(formData);
		dispatch({
			type: CREATE_NEW_COMPANY,
			payload: result.data,
		});
	} catch (error) {
		throw error;
	}
};

export const fecthDataUserAllCompanyAction = async (dispatch) => {
	try {
		const result = await fecthDataUserAllCompanyService();
		dispatch({
			type: FECTH_DATA_USER_ALL_COMPANY,
			payload: result.data,
		});
	} catch (error) {
		throw error;
	}
};

export const deleteUserCompanyAction = async (dispatch, userId, userRoles) => {
	try {
		await deleteUserService(userId, userRoles);
		dispatch({
			type: DELETE_USER_COMPANY,
			payload: { userId, userRoles },
		});
	} catch (error) {
		throw error;
	}
};

export const updateUserCompanyAction = async (dispatch, userId, formData) => {
	try {
		const result = await updateUserCompany(userId, formData);
		dispatch({
			type: UPDATE_USER_COMPANY,
			payload: result.data.result,
		});
	} catch (error) {
		throw error;
	}
};
