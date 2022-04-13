import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk)) // applyMiddleware - нужно взять какие-то посредники (thunk) и использовать при каждом action
); // можно передавать только один reducer!

//window.store = store;

export default store;