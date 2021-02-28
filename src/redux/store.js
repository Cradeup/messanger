import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import combineReducers from './reducers/rootReducer';


const initialState = {};

const store = createStore(combineReducers, initialState, compose(applyMiddleware(thunk)));

export default store