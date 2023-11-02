import React, { createContext, useContext, useReducer } from "react";
import { placementReducer } from "./placementReducer";
import {
	fetchListPlacementDataAction,
	fetchListFreelanceDataAction,
	fetchListCompanyDataAction,
	addNewPlacementAction,
	deletePlacementAction,
	putPlacementAction,
} from "../../../service/admin/adminAction";

const initialState = {
	placementData: [],
	freelanceData: [],
	companyData: [],
};

export const PlacementDataContext = createContext();

export const PlacementDataProvider = ({ children }) => {
	const [data, dispatch] = useReducer(placementReducer, initialState);

	React.useEffect(() => {
		fetchListPlacementDataAction(dispatch);
		fetchListFreelanceDataAction(dispatch);
		fetchListCompanyDataAction(dispatch);
	}, []);

	return (
		<PlacementDataContext.Provider
			value={{
				data,
				addNewPlacement: (data) => addNewPlacementAction(dispatch, data),
				putPlacement: (formData, placementId) =>
					putPlacementAction(dispatch, formData, placementId),
				deletePlacement: (placementId) =>
					deletePlacementAction(dispatch, placementId),
			}}>
			{children}
		</PlacementDataContext.Provider>
	);
};

export const usePlacementData = () => {
	return useContext(PlacementDataContext);
};
