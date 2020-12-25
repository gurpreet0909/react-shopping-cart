import {createStore, applyMiddleware,compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { productsReducer } from './reducers/productReduces';

const initialState = {};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__ || compose;

const store = createStore(combineReducers({
 products: productsReducer,

}), 
initialState,
composeEnhancers(applyMiddleware(thunk))
);

export default store;