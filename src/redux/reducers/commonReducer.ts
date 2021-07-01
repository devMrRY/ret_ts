import {
  SET_TOAST,
  CLEAR_TOAST
} from '../actions/types';

import { actionTypes } from "../../utils/interfaces";

interface IAction {
  type: actionTypes;
  payload: any;
}

const initialState: any = {
  toast: {
    message: '',
    open: false,
    type: 'error'
  },
  activeUser: null
};

const commonReducer= (state = initialState, action: IAction) => {
  switch (action.type) {
    case SET_TOAST:
      return {
        ...state,
        toast: { ...action.payload, open: true },
      };
    case CLEAR_TOAST:
      return {
        ...state,
        toast: { ...initialState.toast },
      };
    default:
      return state;
  }
}

export default commonReducer