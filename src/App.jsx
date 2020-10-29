import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import routes from './routes';
import store from './store';
import { Header, Footer } from './components';

const App = () => (
  <Provider store={store}>
    <Router>
      <Header />
      <Switch>
        {routes.map((route) => (
          <Route exact={route.exact} path={route.path} component={route.component} />
        ))}
      </Switch>
      <Footer />
    </Router>
  </Provider>
);

export default App;
