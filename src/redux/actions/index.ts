import * as BlogActionCreators from './blog';
import * as SubscribesActionCreators from './subscribes';
import * as ProductsActionCreators from './products';
import * as FiltersActionCreators from './filters';
import * as FavoriteActionCreators from './favorite';
import * as ProductActionCreators from './product';
import * as CategoryActionCreators from './category';
import * as BurgerActionCreators from './burger';
import * as AsidePopupActionCreators from './asidePopup';
import * as CartActionCreators from './cart';
import * as OrdersActionCreators from './orders';
import * as OrderActionCreators from './order';

export default {
    ...BlogActionCreators,
    ...SubscribesActionCreators,
    ...ProductsActionCreators,
    ...FiltersActionCreators,
    ...FavoriteActionCreators,
    ...ProductActionCreators,
    ...CategoryActionCreators,
    ...BurgerActionCreators,
    ...AsidePopupActionCreators,
    ...CartActionCreators,
    ...OrdersActionCreators,
    ...OrderActionCreators,
}