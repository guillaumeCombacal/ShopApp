// Store/configureStore.js

// import { createStore } from 'redux'
// import favoriteItemsReducer from './Reducers/favoriteReducer'

// export default createStore(favoriteItemsReducer);


// EXAMPLE
import { createStore } from 'redux'
import rootReducer from './Reducers/rootReducer';

// const initStore = (initialState) => {
//   return createStore(
//     rootReducer,
//     initialState
//   );
// }

export const store = createStore(rootReducer);

// export { store };
//export default createStore(rootReducer);