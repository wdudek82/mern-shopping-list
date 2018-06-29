// @flow
import * as React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

type Props = {};

const App = (props: Props) => {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <h1>Hello!</h1>
        <ShoppingList />
      </div>
    </Provider>
  );
};

export default App;
