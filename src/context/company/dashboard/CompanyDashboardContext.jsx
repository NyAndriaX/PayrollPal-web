import React, { createContext, useContext, useReducer } from "react";
import { companyDashboardReducer } from "./CompanyDashboardReducer";
import {
	fetchAllFreelancerAction,
	deleteOnePlacementInThisEntrepriseAction,
} from "../../../service/company/companyAction";
import { useUserData } from "../../authentification/userContext";

const initialState = {
	freelances: [],
	nrbDateValidity: 0,
	nbrFreelancer: 0,
};

export const CompanyDashboardDataContext = createContext();

export const CompanyDashboardProvider = ({ children }) => {
	const { data } = useUserData();
	const { infosUsers } = data;
	const [companyData, dispatch] = useReducer(
		companyDashboardReducer,
		initialState
	);

	React.useEffect(() => {
		fetchAllFreelancerAction(dispatch, infosUsers._id);
	}, []);

	return (
		<CompanyDashboardDataContext.Provider
			value={{
				companyData,
				deleteOnePlacementInThisEntreprise: (idEntreprise, idFreelance) =>
					deleteOnePlacementInThisEntrepriseAction(
						dispatch,
						idEntreprise,
						idFreelance
					),
			}}>
			{children}
		</CompanyDashboardDataContext.Provider>
	);
};

export const useCompanyDashboardData = () => {
	return useContext(CompanyDashboardDataContext);
};
