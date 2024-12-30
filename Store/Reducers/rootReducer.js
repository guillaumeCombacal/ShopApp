import { combineReducers } from 'redux';
import favoriteItemsReducer from './favoriteReducer';

const rootReducer = combineReducers({
	favoriteItemsReducer
});

export default rootReducer;