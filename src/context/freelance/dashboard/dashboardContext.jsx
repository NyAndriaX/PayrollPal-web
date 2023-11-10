import React, { createContext, useContext, useReducer } from "react";
import { dashboardReducer } from "./dashboardReducer";

const initialState = {
	nbrJoursDeposer: 0,
};

export const DashboardDataContext = createContext();

export const DashboardProvider = ({ children }) => {
	const [data, dispatch] = useReducer(dashboardReducer, initialState);

	return (
		<DashboardDataContext.Provider
			value={{
				data,
			}}>
			{children}
		</DashboardDataContext.Provider>
	);
};

export const useDashboardData = () => {
	return useContext(DashboardDataContext);
};
