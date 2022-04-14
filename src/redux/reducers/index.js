import filters from './filters';
import products from './products';
import cart from './cart';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
  filters,
  products,
  //cart,
});

export default rootReducer;