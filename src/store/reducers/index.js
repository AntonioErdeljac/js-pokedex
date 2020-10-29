import { combineReducers } from 'redux';

import item from './item';
import items from './items';
import favorites from './favorites';

export default combineReducers({
  item,
  items,
  favorites,
});
