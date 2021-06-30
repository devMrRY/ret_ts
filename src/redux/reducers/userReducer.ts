import {
  GET_USERS,
  SET_ACTIVE_USER
} from '../actions/types';

import { actionTypes } from "../../utils/interfaces";

interface IAction {
  type: actionTypes;
  payload: any;
}

const initialState: any = {
  users: null,
  activeUser: null
};

const userReducer= (state = initialState, action: IAction) => {
  switch (action.type) {
    case GET_USERS:
      return {
        users: [ ...action.payload ],
      };
    case SET_ACTIVE_USER:
      return {
        ...state,
        activeUser: { ...action.payload },
      };
    default:
      return state;
  }
}

export default userReducer