import { Action } from '@ngrx/store';
import { type } from '../../utility';

export const ActionTypes = {
    GET_USER_DETAIL_KJH: type('[COMM]GET_USER_DETAIL_KJH'),
    GET_USER_DETAIL_SUCCESS_KJH: type('[COMM]GET_USER_DETAIL_SUCCESS_KJH'),
    GET_USER_DETAIL_FAIL_KJH: type('[COMM]GET_USER_DETAIL_FAIL_KJH')
}

/**
 * Common Action
 */
export class GetUserDetailActionKjh implements Action {
    type = ActionTypes.GET_USER_DETAIL_KJH
    constructor(public payload: any) { }
}

export class GetUserDetailSuccessActionKjh implements Action {
    type = ActionTypes.GET_USER_DETAIL_SUCCESS_KJH
    constructor(public payload: any) { }
}

export class GetUserDetailFailActionKjh implements Action {
    type = ActionTypes.GET_USER_DETAIL_FAIL_KJH
    constructor(public payload: any = null) { }
}


export type Actions
    = GetUserDetailActionKjh
    | GetUserDetailSuccessActionKjh
    | GetUserDetailFailActionKjh