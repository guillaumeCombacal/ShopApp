import * as React from 'react';
import NavigationStack from './Navigation/Navigation'
import { Provider } from 'react-redux'
import { store } from './Store/configureStore'

export default function App() {
  return (
    <Provider store={store}>
      <NavigationStack/>
    </Provider>
  );
}