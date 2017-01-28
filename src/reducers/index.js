// Set up your root reducer here...
import { combineReducers } from 'redux';
import user from './userReducer';

const rootReducer = combineReducers({
  user: user
})

 export default rootReducer;
