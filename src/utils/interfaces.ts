import { UserType } from './enums';
import { RouteComponentProps } from 'react-router-dom';

// REACT
export interface ITarget {
  target: {
    value: React.SetStateAction<string>;
  };
  preventDefault(): void;
}

// AUTH
export interface IUser {
  fname?: string;
  lname?: string;
  email: string;
  password?: string;
  password2?: string;

  address?: string;
  phone?: string;
  id?: string;
  token?: any;
  image?: string
  userType?: UserType.ADMIN | UserType.USER
}
export interface IAuthReduxProps {
  auth: { isAuthenticated: boolean } | IUserRedux;
}
export interface IAuthFunction {
  name?: string;
  email: string;
  password: string;
}
export interface IAction {
  type: actionTypes|string;
  payload?: any;
}

export interface IUserRedux {
  isLoading: boolean;
  isAuth: boolean;
  user: IUser | null
}

export interface ISetLocalStorage {
  key: string;
  payload: any
}

export type actionTypes = 'GET_USERS' | "LOGIN_SUCCESS" | "LOGIN_FAIL" | "LOGOUT" | 'SET_ACTIVE_USER' | 'SET_TOAST' | 'CLEAR_TOAST'