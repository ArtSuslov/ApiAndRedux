import { createStore, applyMiddleware } from 'redux';
import { pageReducer } from '../reducers/pageReducer.js';
import logger from 'redux-logger';
import thunk from 'redux-thunk';


export const store = createStore(pageReducer, applyMiddleware(thunk, logger));
