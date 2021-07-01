import { combineReducers } from 'redux';
import authReducer from './authReducer';
import userReducer from './userReducer';
import commonReducer from './commonReducer';

 const rootreducer = combineReducers({
  auth: authReducer,
  users: userReducer,
  common: commonReducer
});

export default rootreducer
export type IRootState=ReturnType<typeof rootreducer>
