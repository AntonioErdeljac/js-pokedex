import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import routes from './routes';
import store from './store';
import { Header, Footer } from './components';

const App = () => (
  <Provider store={store}>
    <Router>
      <Header />
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            exact={route.exact}
            path={route.path}
            element={<route.component />}
          />
        ))}
      </Routes>
      <Footer />
    </Router>
  </Provider>
);

export default App;
