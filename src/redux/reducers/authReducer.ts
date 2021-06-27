import {
  LOGIN_SUCCESS,
  LOGOUT,
} from '../actions/types';

import { IUserRedux, actionTypes, IUser } from "../../utils/interfaces";
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
    case LOGIN_SUCCESS:
      return {
        user: { ...action.payload },
        isAuth: true,
        isLoading: false
      };
    case LOGOUT:
      return {
        ...initialState
      };
    default:
      return state;
  }
}


export default userReducer