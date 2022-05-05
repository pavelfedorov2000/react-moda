import filters from './filters';
import products from './products';
import favorite from './favorite';
import cart from './cart';
import order from './order';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  filters,
  products,
  favorite,
  cart,
  order,
});

export default rootReducer;