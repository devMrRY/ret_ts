import { AxiosResponse } from 'axios';
import { Dispatch } from 'redux';
import Api from '../../api/index';
import { setLocalStorage } from '../../utils/helper';
import { IAction } from '../../utils/interfaces';
import { LOGIN_SUCCESS, LOGOUT } from './types';
import { ToastAction } from './user';

export const loginAction: (a:string) => void = (payload:string) => async (dispatch: Dispatch<IAction> | any) => {
    try {
        const res:AxiosResponse<any> = await Api.apiGet("login", payload)
        if(res.data?.length){
            setLocalStorage("token", JSON.stringify({id: res.data[0].id, name: res.data[0].firstname, role: res.data[0].role}));
            dispatch({ type: LOGIN_SUCCESS, payload: res.data[0]})
        }else{
            dispatch(ToastAction({type: 'error', message: 'Email and Password does not match ):'}))
        }
    } catch (err) {
        console.log(err);
    }
}

export const registerAction: (a: object, b: Function) => void = (payload:object, cb: Function) => async (dispatch: any) => {
    try {
        const res:AxiosResponse<any> = await Api.apiPost("signUp", payload)
        if(res.data?.length){
            cb();
        }else{
            dispatch(ToastAction({type: 'error', message: 'Error occured while creating user ):'}))
        }
    } catch (err) {
        console.log(err);
    }
}

export const logoutAction: (a:any) => void = (cb:any) => async (dispatch: Dispatch<IAction>) => {
    try {
        localStorage.removeItem("token");
        dispatch({ type: LOGOUT })
        cb();
    } catch (err) {
        console.log(err);
    }
}