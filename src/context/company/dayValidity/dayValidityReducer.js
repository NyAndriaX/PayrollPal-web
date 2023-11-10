import {
	FETCH_ALL_DAY_DUMP_BY_FREELANCE,
	REFUS_DAY_DUMP,
	VALIDATION_DAY_DUMP,
} from "../../../service/company/companyAction";

const companyDayValidityReducer = (state, action) => {
	switch (action.type) {
		case FETCH_ALL_DAY_DUMP_BY_FREELANCE:
			let sum = 0;
			action.payload.map((item) => {
				sum = sum + item._doc?.nbrDeJours;
			});
			return {
				...state,
				dayValidity: action.payload,
				nrbDayValidity: sum,
			};
		case VALIDATION_DAY_DUMP:
			const dayValidity = state.dayValidity;
			const updatedDayValidityData = dayValidity.map((item) => {
				if (item._doc._id === action.payload._id) {
					return {
						...item,
						_doc: {
							...item._doc,
							isValid: "valid",
						},
					};
				} else {
					return item;
				}
			});
			return {
				...state,
				dayValidity: updatedDayValidityData,
			};
		case REFUS_DAY_DUMP:
			const dayValidityRefusing = state.dayValidity;
			const updatedDayValidityDataRefusing = dayValidityRefusing.map((item) => {
				if (item._doc._id === action.payload._id) {
					return {
						...item,
						_doc: {
							...item._doc,
							isValid: "notValid",
						},
					};
				} else {
					return item;
				}
			});
			return {
				...state,
				dayValidity: updatedDayValidityDataRefusing,
			};
		default:
			return state;
	}
};

export { companyDayValidityReducer };
