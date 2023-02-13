import * as BlogActionCreators from './blog';
import * as SubscribesActionCreators from './subscribes';

export default {
    ...BlogActionCreators,
    ...SubscribesActionCreators
}