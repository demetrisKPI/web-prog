import { CHANGE_ACTIVE_ITEM, PURCHASE_ITEM, 
	FETCH_MERCHLIST, POST_NEW_ITEM, FETCH_FILTERLIST, FETCH_SEARCH } from '../actions/types';

const initialState = {
	activeItem: '',
	search: '',
	itemlist: [],
	filterlist: {
		clothes: false,
		household: false,
		devices: false
	},
	basket: []
};

export default function (state = initialState, action) {
	switch (action.type) {
		case CHANGE_ACTIVE_ITEM:
			return {
				...state,
				activeItem: action.payload
			};
		case FETCH_MERCHLIST:
			return {
				...state, 
				itemlist: action.payload
			};
		case FETCH_FILTERLIST:         
			return {
				...state, 
				filterlist: action.payload
			};
		case FETCH_SEARCH:
			return {
				...state, 
				search: action.payload
			};
		case PURCHASE_ITEM:
			return {
				...state, 
				basket: action.payload
			};
		default:
			return state;
	}
}