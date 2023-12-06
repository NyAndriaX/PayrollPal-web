import React, { createContext, useContext, useReducer } from "react";
import {
	fetchPlacementByFreelanceIdAction,
	fetchDayDumpInThisMonthAction,
	fetchDayValidityAction,
	depositDayDumpAction,
} from "../../../service/freelance/freelanceAction";
import { dayDumpReducer } from "./dayDumpReducer";
import { useUserData } from "../../authentification/userContext";

const initialState = {
	nbrDeJours: 0,
	isDepositDayInThisMonth: false,
	placement: null,
	alldayDump: [],
};

export const DayDumpDataContext = createContext();

export const DayDumpProvider = ({ children }) => {
	const [dayDumpData, dispatch] = useReducer(dayDumpReducer, initialState);
	const { data } = useUserData();
	const idFreelance = data.infosUsers?._id;
	React.useEffect(() => {
		const fetchData = async () => {
			try {
				const placement = await fetchPlacementByFreelanceIdAction(
					dispatch,
					idFreelance
				);

				await fetchDayDumpInThisMonthAction(dispatch, placement._id);
				await fetchDayValidityAction(dispatch, placement._id);
			} catch (error) {
				throw error;
			}
		};

		fetchData();
	}, [idFreelance, dispatch]);
	return (
		<DayDumpDataContext.Provider
			value={{
				dayDumpData,
				depositDayDump: (data) => depositDayDumpAction(dispatch, data),
			}}>
			{children}
		</DayDumpDataContext.Provider>
	);
};

export const useDayDumpData = () => {
	return useContext(DayDumpDataContext);
};
