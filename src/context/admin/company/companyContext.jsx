import React, { createContext, useContext, useReducer } from "react";
import { companyReducer } from "./companyReducer";
import {
	createNewCompanyAction,
	fecthDataUserAllCompanyAction,
	deleteUserCompanyAction,
	updateUserCompanyAction,
} from "../../../service/admin/adminAction";

const initialState = {
	companyList: [],
	nbrCompany: 0,
};

export const CompanyDataContext = createContext();

export const CompanyProvider = ({ children }) => {
	const [data, dispatch] = useReducer(companyReducer, initialState);

	React.useEffect(() => {
		fecthDataUserAllCompanyAction(dispatch);
	}, []);

	return (
		<CompanyDataContext.Provider
			value={{
				data,
				updateUserCompany: (userId, formData) =>
					updateUserCompanyAction(dispatch, userId, formData),
				deleteUserCompany: (userId, userRoles) =>
					deleteUserCompanyAction(dispatch, userId, userRoles),
				createNewCompany: (formData) =>
					createNewCompanyAction(dispatch, formData),
			}}>
			{children}
		</CompanyDataContext.Provider>
	);
};

export const useCompanyData = () => {
	return useContext(CompanyDataContext);
};
