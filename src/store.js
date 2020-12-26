import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { productsReducer } from './reducers/productReduces';
import { cartReducer } from './reducers/cartReducer';
import { orderReducer } from './reducers/orderReducer';

const initialState = {};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(combineReducers({
  products: productsReducer,
  cart: cartReducer,
  order: orderReducer
}),
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;