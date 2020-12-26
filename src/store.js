import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { productsReducer } from './reducers/productReduces';
import { cartReducer } from './reducers/cartReducer';

const initialState = {};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(combineReducers({
  products: productsReducer,
  cart: cartReducer,
}),
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;