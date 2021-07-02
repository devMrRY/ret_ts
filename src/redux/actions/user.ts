import { AxiosResponse } from 'axios';
import { Dispatch } from 'redux';
import Api from '../../api/index';
import { IAction } from '../../utils/interfaces';
import { CLEAR_TOAST, GET_USERS, SET_ACTIVE_USER, SET_TOAST } from './types';

export const ToastAction = (payload: any) => (dispatch: Dispatch<IAction>) => {
    dispatch({ type: SET_TOAST, payload })
}

export const clearToastAction = () => (dispatch: Dispatch<IAction>) => {
    dispatch({ type: CLEAR_TOAST, payload: null })
}

export const usersListAction: () => void = () => async (dispatch: Dispatch<IAction>) => {
    try {
        const res:AxiosResponse<any> = await Api.apiGet("userList")
        dispatch({ type: GET_USERS, payload: res.data })
    } catch (err) {
        console.log(err);
    }  
}

export const deleteUserAction: (a:string) => void = (args:string) => async (dispatch: any) => {
    try {
        await Api.apiDelete("users", args)
        dispatch(usersListAction())
    } catch (err) {
        console.log(err);
    }
}

export const getUserById: (a:string) => void = (args:string) => async (dispatch: any) => {
    try {
        const res:AxiosResponse<any> = await Api.apiGet("users", args)
        dispatch(setActiveUserAction(res.data))
    } catch (err) {
        console.log(err);
    }
}

export const updateUser: (a:number, b: any) => void = (id, payload) => async (dispatch: any) => {
    try {
        const res:AxiosResponse<any> = await Api.apiPutUrl("users", `/${id}`, payload)
        dispatch(ToastAction({type: 'success', message: 'User updated successfully !'}))
        dispatch(setActiveUserAction(res.data))
    } catch (err) {
        console.log(err);
        dispatch(ToastAction({type: 'error', message: 'Error Occured while updating user ):'}))
    }
}

export const setActiveUserAction: (a:any) => void = (payload:any) => async (dispatch: any) => {
    dispatch({ type: SET_ACTIVE_USER, payload })
}