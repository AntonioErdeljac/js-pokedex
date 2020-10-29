import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import { Header } from './components';
import { Home } from './views';

const App = () => (
  <Provider store={store}>
    <Header />
    <Home />
  </Provider>
);

export default App;
