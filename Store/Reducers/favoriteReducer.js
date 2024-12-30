// Store/Reducers/favoriteReducer.js

import { useReducer } from "react";
import DataManager from "../../Components/DataManager";
import EActionsType from "../actionsType"

const initialState = { favoriteItems: [], testReducer: 0 }

function favoriteItemsReducer(state = initialState, action) {
	let nextState
	switch (action.type) {
		case EActionsType.INIT:
		case EActionsType.ADD_FAVORITE_ITEM:

			console.log("Reducer Add item " + action.value.name)
			nextState = {
				...state,
				favoriteItems: [...state.favoriteItems, action.value.name]
			}

			const items = nextState.favoritesItem.map((item) => item);
			// console.log(nextState.favoritesItem);
			// console.log(items);
			DataManager.favoriteItemsToJson(items);

			return nextState || state
		case 'TEST':
			console.log("REDUCER => TEST");
			nextState = {
				...state,
				testReducer: state.testReducer += 1
			}
			console.log(nextState.testReducer);
			return nextState || state
		default:
			return state
	}
}

export default favoriteItemsReducer