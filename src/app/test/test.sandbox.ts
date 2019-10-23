import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'
import { Subscription } from 'rxjs'
import * as store from '../shared/store'
import * as testActions from '../shared/store/actions/test.action'

@Injectable()
export class TestSandbox {

    public userInfoLoading$ = this.appState$.select(store.getUserInfoLoading)
    public userInfoLoaded$ = this.appState$.select(store.getUserInfoLoaded)
    public userInfo$ = this.appState$.select(store.getUserInfo);
    public userInfoFaild$ = this.appState$.select(store.getUserInfoFailed)

    public userInfo: string = "";

    private subscriptions: Array<Subscription> = [];


    constructor(
        protected appState$: Store<store.State>,

    ) {
        this.registerAuthEvents();
    }

    /**
     * Dispatches action
     */
    public getAnUserDetail(userId: string): void {
        this.appState$.dispatch(new testActions.GetUserDetailAction(userId))
    }

    /**
     * Unsubscribe from events
     */
    public unregisterEvents() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }

    /**
     * Registers events
     */
    private registerAuthEvents(): void {
        this.subscriptions.push(this.userInfoLoading$.subscribe((loading: boolean) => {
            if (loading) {
                //로딩 중 처리
            }
        }))
        this.subscriptions.push(this.userInfoLoaded$.subscribe((loaded: boolean) => {
            if (loaded) {
                //응답 완료 후 처리
            }
        }))
        this.subscriptions.push(this.userInfo$.subscribe((user: JSON) => {
            if (user && user['id'] && user['id'].length > 0) {
                this.userInfo = JSON.stringify(user)
            }
        }))
        this.subscriptions.push(this.userInfoFaild$.subscribe((failed: boolean) => {
            console.log("failed : " + failed)
            if (failed) {
                this.userInfo = ""
            }
        }))        

    }


}