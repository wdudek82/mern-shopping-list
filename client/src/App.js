// @flow
import * as React from 'react';
import { Provider } from 'react-redux';
import { Container } from 'reactstrap';
import store from './store';

import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import ItemModal from './components/ItemModal';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

type Props = {};

const App = (props: Props) => {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <Container>
          <ItemModal />
          <ShoppingList />
        </Container>
      </div>
    </Provider>
  );
};

export default App;
