import * as BlogActionCreators from './blog';
import * as SubscribesActionCreators from './subscribes';
import * as ProductsActionCreators from './products';
import * as FiltersActionCreators from './filters';
import * as FavoriteActionCreators from './favorite';
import * as ProductActionCreators from './product';

export default {
    ...BlogActionCreators,
    ...SubscribesActionCreators,
    ...ProductsActionCreators,
    ...FiltersActionCreators,
    ...FavoriteActionCreators,
    ...ProductActionCreators,
}