import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of, throwError } from 'rxjs';
import * as actions from '../actions/kjh-md.action'
import { Store } from '@ngrx/store';
import * as store from '../index';
import { switchMap, map, catchError } from 'rxjs/operators';
import { environment } from '../../../../environments/environment'
import { HttpClient } from '@angular/common/http';

@Injectable()
export class KjhMdEffects {

    constructor(
        private actions$: Actions,
        private http: HttpClient
    ) { }

    baseURL: string = environment.backend.baseURL

    @Effect()
    getUserDetail$: Observable<Action> = this.actions$.pipe(
        ofType(actions.ActionTypes.GET_USER_DETAIL_KJH),
        map((action: actions.GetUserDetailActionKjh) => action.payload),
        switchMap((userId) => {
            console.log("userId : " + userId)
            // return this.http.get(`http://localhost:8081/userInfo.json`)
            return this.http.get(`${this.baseURL}/getAnUserDetail/${userId}`).pipe(
                map((response: JSON) => {
                    console.log("response : " + JSON.stringify(response))
                    return new actions.GetUserDetailSuccessActionKjh(response)
                }),
                catchError((error) => {
                    return of(new actions.GetUserDetailFailActionKjh())
                })
            )
        })
    )


}