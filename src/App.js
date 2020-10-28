import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import { Header, List } from './components';

const App = () => (
  <Provider store={store}>
    <Header />
    <List />
  </Provider>
);

export default App;
