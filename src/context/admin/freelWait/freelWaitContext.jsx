import React, { createContext, useContext, useReducer } from "react";
import { freelWaitReducer } from "./freelWaitReducer";
import {
	fetchUnvalidatedUsersAction,
	validateFreelanceAction,
	deleteFreelanceWaitAction,
} from "../../../service/admin/adminAction";

const freelWaitData = [];

export const FreelWaitDataContext = createContext();

export const FreelWaitDataProvider = ({ children }) => {
	const [freelanceData, dispatch] = useReducer(freelWaitReducer, freelWaitData);

	React.useEffect(() => {
		fetchUnvalidatedUsersAction(dispatch);
	}, []);

	return (
		<FreelWaitDataContext.Provider
			value={{
				freelanceData,
				validateFreelance: (id) => validateFreelanceAction(dispatch, id),
				deleteFreelanceWait: (id) => deleteFreelanceWaitAction(dispatch, id),
			}}>
			{children}
		</FreelWaitDataContext.Provider>
	);
};

export const useFreelWaitData = () => {
	return useContext(FreelWaitDataContext);
};
