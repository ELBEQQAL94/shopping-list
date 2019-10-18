import React from 'react';
import NavBarComponent from './components/NavBarComponent';
import ShoppingList from './components/ShoppingList';
import ('bootstrap/dist/css/bootstrap.min.css');
import ('./App.css');

const App = () => (
  <>
    <NavBarComponent />
    <ShoppingList />
  </>
);

export default App;