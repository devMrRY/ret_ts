import { AxiosResponse } from 'axios';
import { Dispatch } from 'redux';
import Api from '../../api/index';
import { IAction } from '../../utils/interfaces';
import { LOGIN_SUCCESS } from './types';

export const loginAction = (payload:string) => async (dispatch: Dispatch<IAction>) => {
    try {
        const res:AxiosResponse<any> = await Api.apiGet("login", payload)
        dispatch({ type: LOGIN_SUCCESS, payload: res.data[0]})
    } catch (err) {
        console.log(err);
    }
}

export const registerAction = (payload:object, cb: Function) => async (dispatch: Dispatch<IAction>) => {
    try {
        await Api.apiPost("signUp", payload)
        cb();
    } catch (err) {
        console.log(err);
    }
}