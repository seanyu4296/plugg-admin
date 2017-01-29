// Set up your root reducer here...
import { combineReducers } from 'redux';
import user from './userReducer';
import isLoggedIn from './authReducer';

const rootReducer = combineReducers({
  user: user,
  isLoggedIn: isLoggedIn,
})

export default rootReducer;
