import blogReducer from './blog';
import subscribesReducer from './subscribes';
import productsReducer from './products';
import productReducer from './product';
import filtersReducer from './filters';
import favoriteReducer from './favorite';
import categoryReducer from './category';
import burgerReducer from './burger';
import asidePopupReducer from './asidePopup';

import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
    blogReducer,
    subscribesReducer,
    productsReducer,
    filtersReducer,
    favoriteReducer,
    productReducer,
    categoryReducer,
    burgerReducer,
    asidePopupReducer,
});

export type RootState = ReturnType<typeof rootReducer>;