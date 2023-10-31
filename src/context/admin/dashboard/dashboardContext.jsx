import React, { createContext, useContext, useReducer } from "react";
import { dashboardReducer } from "./dashboardReducer";
import {
	fetchAllUsersAction,
	filterDataInFreelanceAction,
	filterDataInCompanyAction,
	seeAllDataAction,
	deleteUserAction,
} from "../../../service/admin/adminAction";

const initialState = {
	notTouchUsersdata: [],
	allUsers: [],
	nbrFreelance: 0,
	nbrCompany: 0,
};

export const DashboardDataContext = createContext();

export const DashboardProvider = ({ children }) => {
	const [data, dispatch] = useReducer(dashboardReducer, initialState);

	React.useEffect(() => {
		fetchAllUsersAction(dispatch);
	}, []);

	return (
		<DashboardDataContext.Provider
			value={{
				data,
				filterDataInFreelance: () => filterDataInFreelanceAction(dispatch),
				filterDataInCompany: () => filterDataInCompanyAction(dispatch),
				seeAllData: () => seeAllDataAction(dispatch),
				deleteUser: (userId, userRoles) =>
					deleteUserAction(dispatch, userId, userRoles),
			}}>
			{children}
		</DashboardDataContext.Provider>
	);
};

export const useDashboardData = () => {
	return useContext(DashboardDataContext);
};
