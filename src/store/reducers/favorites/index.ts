import {ADD_FAVORITE_ANIME,ADD_FAVORITE_MANGA} from './types';

const INITIAL_STATE = {
	manga:"[]",
	anime: "[]",
}

export default function favoriteReducer(state=INITIAL_STATE,action){
	switch (action.type) {
		case ADD_FAVORITE_ANIME:
			return {...state,anime:action.payload}
		case ADD_FAVORITE_MANGA:
			return {...state,manga:action.payload}
		default:
			return state
	}
}