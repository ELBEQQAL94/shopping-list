import React from 'react';
import NavBarComponent from './components/NavBarComponent';
import ShoppingList from './components/ShoppingList';

// redux
import { Provider } from 'react-redux';

// store
import store from './redux/store';

import ('bootstrap/dist/css/bootstrap.min.css');
import ('./App.css');

const App = () => (
  <Provider store={store}>
    <NavBarComponent />
    <ShoppingList />
  </Provider>
);

export default App;