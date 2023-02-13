/* import filters from './filters';
import products from './products';
import favorite from './favorite';
import cart from './cart';
import order from './order';
import subscribes from './subscribes'; */
import blogReducer from './blog';
import subscribesReducer from './subscribes';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
    blogReducer,
    subscribesReducer
});

export type RootState = ReturnType<typeof rootReducer>;