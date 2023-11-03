import { CREATE_NEW_COMPANY } from "../../../service/admin/adminAction";

const companyReducer = (state, action) => {
	switch (action.type) {
		case CREATE_NEW_COMPANY:
			console.log(action.payload);
		default:
			return state;
	}
};

export { companyReducer };
