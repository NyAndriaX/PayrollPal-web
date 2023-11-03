import React, { createContext, useContext, useReducer } from "react";
import { companyReducer } from "./companyReducer";
import { createNewCompanyAction } from "../../../service/admin/adminAction";

const initialState = {
	companyList: [],
	nbrCompany: 0,
};

export const CompanyDataContext = createContext();

export const CompanyProvider = ({ children }) => {
	const [data, dispatch] = useReducer(companyReducer, initialState);

	// React.useEffect(() => {
	// 	fetchAllUsersAction(dispatch);
	// }, []);

	return (
		<CompanyDataContext.Provider
			value={{
				data,
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
