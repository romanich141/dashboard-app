import { ADD_FILTER, CLEAR_FILTERS, REMOVE_FILTER } from "./filters-actions";

export const filtersReducer = (state = [], action) => {
	switch (action.type) {
		case ADD_FILTER:
			if (state.includes(action.filter)) return state;

			return state.concat(action.filter);
		case REMOVE_FILTER:
			return state.filter(item => item !== action.filter);
		case CLEAR_FILTERS:
			return [];
		default:
			return state;
	}
}