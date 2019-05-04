import { createStore, applyMiddleware } from 'redux';
import { usersReducer } from '../reducers/usersReducer.js';
import logger from 'redux-logger';
import thunk from 'redux-thunk';


export const store = createStore(usersReducer, applyMiddleware(thunk, logger));
