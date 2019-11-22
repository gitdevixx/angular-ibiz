import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Action, Store } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable, of, throwError } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';
import * as store from '../index';
import * as actions from '../actions/mina.action';

@Injectable()
export class MinaEffects {

  constructor(
    private actions$: Actions,
    private http: HttpClient
  ) { }

  // baseURL: string = environment.backend.baseURL // not work in stackblitz
  baseURL: string = "https://fierce-cove-29863.herokuapp.com" // work in stackblitz

  @Effect()
  getMinaDetail$: Observable<Action> = this.actions$.pipe(
    ofType(actions.ActionTypes.GET_MINA_DETAIL),
    map((action: actions.GetMinaDetailAction) => action.payload),
    switchMap((userId) => {     
console.log("userId: " + userId)

      return this.http.get(`${this.baseURL}/getAnUserDetail/${userId}`).pipe(
        map((response: JSON) => {
console.log("response ===> " + JSON.stringify(response))
          return new actions.GetMinaDetailSuccessAction(response)
        }),
        catchError((error) => {
// console.log("error ===> " + JSON.stringify(error))
          return of(new actions.GetMinaDetailFailAction())
        })
      )

    })
  )

}