import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from '../actions/types';

import { IUserRedux, actionTypes, IUser } from "../../utils/interfaces";
import { setLocalStorage } from '../../utils/helper';


interface IAction {
  type: actionTypes;
  payload: IUser;
}

const initialState:IUserRedux = {
  isAuth: false,
  isLoading: false,
  user: null,
};

const userReducer= (state:IUserRedux = initialState, action: IAction) =>{
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case USER_LOADED:
      return {
        ...state,
        isAuth: true,
        isLoading: false,
        user: action.payload
      };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      setLocalStorage('token', action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuth: true,
        isLoading: false
      };
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT_SUCCESS:
    case REGISTER_FAIL:
      localStorage.removeItem('token');
      return {
        ...state,
        user: null,
        isAuth: false,
        isLoading: false
      };
    default:
      return state;
  }
}


export default userReducer