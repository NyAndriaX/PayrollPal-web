import React, { createContext, useContext, useReducer } from "react";
import { companyReducer } from "./companyReducer";
import { fetchAllUsersAction } from "../../../service/admin/adminAction";

const initialState = {
	companyList: [],
	nbrCompany: 0,
};

export const CompanyDataContext = createContext();

export const CompanyProvider = ({ children }) => {
	const [data, dispatch] = useReducer(companyReducer, initialState);

	React.useEffect(() => {
		fetchAllUsersAction(dispatch);
	}, []);

	return (
		<CompanyDataContext.Provider
			value={{
				data,
				// filterDataInFreelance: () => filterDataInFreelanceAction(dispatch),
				// filterDataInCompany: () => filterDataInCompanyAction(dispatch),
				// seeAllData: () => seeAllDataAction(dispatch),
				// deleteUser: (userId, userRoles) =>
				// 	deleteUserAction(dispatch, userId, userRoles),
			}}>
			{children}
		</CompanyDataContext.Provider>
	);
};

export const useCompanyData = () => {
	return useContext(DashboardDataContext);
};
