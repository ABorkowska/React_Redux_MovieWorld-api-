import { createStore, applyMiddleware, compose } from "redux";
import combineReducers from "./reducers";
import thunk from "redux-thunk";
import Logger from 'redux-logger'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [Logger, thunk]

const store = createStore(combineReducers, composeEnhancers(applyMiddleware(...middleware)));

export default store;


