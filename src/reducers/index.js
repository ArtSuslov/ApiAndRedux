import { postReducer } from './postReducer';
import { userReducer } from './userReducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  posts: postReducer,
  users: userReducer,
});
