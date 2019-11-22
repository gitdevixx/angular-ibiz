import { Action } from '@ngrx/store';

import { type } from '../../utility';

export const ActionTypes = {
  GET_MINA_DETAIL: type('[COMM]GET_MINA_DETAIL'),
  GET_MINA_DETAIL_SUCCESS: type('[COMM]GET_MINA_DETAIL_SUCCESS'),
  GET_MINA_DETAIL_FAIL: type('[COMM]GET_MINA_DETAIL_FAIL')
}

/**
 * Common Action
 */
export class GetMinaDetailAction implements Action {
  type = ActionTypes.GET_MINA_DETAIL
  constructor(public payload: any) {}
}

export class GetMinaDetailSuccessAction implements Action {
  type = ActionTypes.GET_MINA_DETAIL_SUCCESS
  constructor(public payload: any) {}
}

export class GetMinaDetailFailAction implements Action {
  type = ActionTypes.GET_MINA_DETAIL_FAIL
  constructor(public payload: any = null) {}
}

export type Actions 
  = GetMinaDetailAction
    | GetMinaDetailSuccessAction
    | GetMinaDetailFailAction