import {
	FETCH_PLACEMENT_BY_FREELANCE_ID,
	FETCH_DAY_DUMP_IN_THIS_MONTH,
	DEPOSIT_DAYDUMP,
	FETCH_ALL_DAY_DUMP,
} from "../../../service/freelance/freelanceAction";

const dayDumpReducer = (state, action) => {
	switch (action.type) {
		case FETCH_PLACEMENT_BY_FREELANCE_ID:
			return {
				...state,
				placement: action.payload,
			};
		case FETCH_ALL_DAY_DUMP:
			return {
				...state,
				alldayDump: action.payload,
			};
		case FETCH_DAY_DUMP_IN_THIS_MONTH:
			return {
				...state,
				nbrDeJours: action.payload?.nbrDeJours || 0,
				isDepositDayInThisMonth: Boolean(action.payload),
			};
		case DEPOSIT_DAYDUMP:
			return {
				...state,
				nbrDeJours: action.payload.nbrDeJours,
				isDepositDayInThisMonth: Boolean(action.payload),
			};
		default:
			return state;
	}
};

export { dayDumpReducer };
