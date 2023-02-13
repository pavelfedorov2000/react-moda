import blogReducer from './blog';
import subscribesReducer from './subscribes';
import productsReducer from './products';
import productReducer from './product';
import filtersReducer from './filters';
import favoriteReducer from './favorite';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
    blogReducer,
    subscribesReducer,
    productsReducer,
    filtersReducer,
    favoriteReducer,
    productReducer
});

export type RootState = ReturnType<typeof rootReducer>;