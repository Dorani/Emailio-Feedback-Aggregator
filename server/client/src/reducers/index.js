import { combineReducers } from 'react';
import authReducer from './authReducer';


export default combineReducers({
  auth: authReducer
});
