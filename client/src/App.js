// @flow
import * as React from 'react';
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

type Props = {};

const App = (props: Props) => {
  return (
    <div className="App">
      <AppNavbar />
      <h1>Hello!</h1>
      <ShoppingList />
    </div>
  );
};

export default App;
