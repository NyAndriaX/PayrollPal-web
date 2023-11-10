import React, { createContext, useContext, useReducer } from "react";
import { companyDayValidityReducer } from "./dayValidityReducer";
import {
	fetchAllDayDumpByFreelanceAction,
	validationDayDumpAction,
	refusDayDumpAction,
} from "../../../service/company/companyAction";
import { useUserData } from "../../authentification/userContext";

const initialState = {
	dayValidity: [],
	nrbDayValidity: 0,
};

export const CompanyDayDumpDataContext = createContext();

export const CompanyDayDumpProvider = ({ children }) => {
	const { data } = useUserData();
	const { infosUsers } = data;
	const idEntreprise = infosUsers?._id;
	const [dayDumpData, dispatch] = useReducer(
		companyDayValidityReducer,
		initialState
	);

	React.useEffect(() => {
		fetchAllDayDumpByFreelanceAction(dispatch, idEntreprise);
	}, []);

	return (
		<CompanyDayDumpDataContext.Provider
			value={{
				dayDumpData,
				validationDayDump: (idDayDump, idPlacement) =>
					validationDayDumpAction(dispatch, idDayDump, idPlacement),
				refusDayDump: (idDayDump, idPlacement) =>
					refusDayDumpAction(dispatch, idDayDump, idPlacement),
			}}>
			{children}
		</CompanyDayDumpDataContext.Provider>
	);
};

export const useCompanyDayDumpData = () => {
	return useContext(CompanyDayDumpDataContext);
};
