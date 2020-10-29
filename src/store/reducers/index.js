import { combineReducers } from 'redux';

import items from './items';
import favorites from './favorites';

export default combineReducers({
  items,
  favorites,
});
