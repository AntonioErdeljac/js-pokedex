import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';
import middleware from './middleware';

const store = createStore(reducers, applyMiddleware(thunk, middleware()));

export default store;
