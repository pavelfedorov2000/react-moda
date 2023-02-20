import blogReducer from './blog';
import subscribesReducer from './subscribes';
import productsReducer from './products';
import productReducer from './product';
import filtersReducer from './filters';
import favoriteReducer from './favorite';
import categoryReducer from './category';
import burgerReducer from './burger';
import asidePopupReducer from './asidePopup';
import cartReducer from './cart';
import ordersReducer from './orders';
import orderReducer from './order';
import profileReducer from './profile';

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
    cartReducer,
    ordersReducer,
    orderReducer,
    profileReducer,
});

export type RootState = ReturnType<typeof rootReducer>;