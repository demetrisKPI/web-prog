import { CHANGE_ACTIVE_ITEM, FETCH_MERCHLIST, POST_NEW_ITEM, FETCH_FILTERLIST, FETCH_SEARCH, PURCHASE_ITEM } from './types';
import axios from 'axios';

// const itemlist = [
// 	{
// 		id: 1,
// 		source: 'https://react.semantic-ui.com/images/avatar/large/matthew.png',
// 		name: 'odezhda',
// 		category: 'clothes',
// 		price: '19.99 $',
// 		description:'Prodam raba nedorogo'
// 	},
// 	{
// 		id: 2,
// 		source: 'https://react.semantic-ui.com/images/avatar/large/matthew.png',
// 		name: 'shvabra',
// 		category: 'household',
// 		price: '19.99 $',
// 		description:'Prodam raba nedorogo'
// 	},
// 	{
// 		id: 3,
// 		source: 'https://react.semantic-ui.com/images/avatar/large/matthew.png',
// 		name: 'shvabra',
// 		category: 'household',
// 		price: '19.99 $',
// 		description:'Prodam raba nedorogo'
// 	},
// 	{
// 		id: 4,
// 		source: 'https://react.semantic-ui.com/images/avatar/large/matthew.png',
// 		name: 'odezhda',
// 		category: 'clothes',
// 		price: '19.99 $',
// 		description:'Prodam raba nedorogo'
// 	},
// 	{
// 		id: 5,
// 		source: 'https://react.semantic-ui.com/images/avatar/large/matthew.png',
// 		name: 'device',
// 		category: 'devices',
// 		price: '19.99 $',
// 		description:'Prodam raba nedorogo'
// 	},
// 	{
// 		id: 6,
// 		source: 'https://react.semantic-ui.com/images/avatar/large/matthew.png',
// 		name: 'device',
// 		category: 'devices',
// 		price: '19.99 $',
// 		description:'Prodam raba nedorogo'
// 	},
// 	{
// 		id: 7,
// 		source: 'https://react.semantic-ui.com/images/avatar/large/matthew.png',
// 		name: 'device',
// 		category: 'devices',
// 		price: '19.99 $',
// 		description:'Prodam raba nedorogo'
// 	}
// ];

export const changeActiveItem = obj => dispatch => {
	dispatch({ type: CHANGE_ACTIVE_ITEM, payload: obj });
};

export const fetchMerchList = () => dispatch => {
    axios
        .get(`/itemlist/`)
        .then(res => {
			console.log(res);
			dispatch({
				type: FETCH_MERCHLIST,
				payload: res
		})})
};

export const postNewItem = obj => dispatch => {
    axios
        .post(`/post-item`, obj)
        .then(res => dispatch({
            type: POST_NEW_ITEM,
            payload: res
        }))
};

export const fetchFilterList = obj => dispatch => {
	dispatch({ type: FETCH_FILTERLIST, payload: obj });
};

export const fetchSearch = obj => dispatch => {
	dispatch({ type: FETCH_SEARCH, payload: obj });
};

export const purchaseItem = obj => dispatch => {
	dispatch({ type: PURCHASE_ITEM, payload: obj });
};