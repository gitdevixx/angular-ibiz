import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import * as store from '../shared/store';
import * as minaActions from '../shared/store/actions/mina.action';

@Injectable()
export class MinaSandbox {

  public minaInfoLoading$ =  this.appState$.select(store.getMinaInfoLoading);
  public minaInfoLoaded$ = this.appState$.select(store.getMinaInfoLoaded);
  public minaInfo$ = this.appState$.select(store.getMinaInfo);
  public minaInfoFailed$ = this.appState$.select(store.getMinaInfoFailed);

  public minaInfo: string = "";
  public minaObject;

  private subscriptions: Array<Subscription> = [];

  constructor(
    protected appState$: Store<store.State>
  ) {
    this.registerAuthEvents();
  }

  /**
   * Dispatches action
   */
  public getMyMinaDetail(userId: string): void {
    this.appState$.dispatch(new minaActions.GetMinaDetailAction(userId));
  }

  /**
   * Unsubscribe from events
   */
  public unsubscribeEvents() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  /**
   * Register events
   */
  public registerAuthEvents(): void {
    this.subscriptions.push(this.minaInfoLoading$.subscribe((loading: boolean) => {
      if(loading) {
        // 로딩 중 처리
      }
    }))
    this.subscriptions.push(this.minaInfoLoaded$.subscribe((loaded: boolean) => {
      if(loaded) {
        // 응답 완료 후 처리
      }
    }))
    this.subscriptions.push(this.minaInfo$.subscribe((user: JSON) => {
      if(user && user['id'] && user['id'].length > 0) {
        this.minaInfo = JSON.stringify(user);
        this.minaObject = user;
      }
    }))
    this.subscriptions.push(this.minaInfoFailed$.subscribe((failed: boolean) => {
      if(failed) {
        this.minaInfo = "";
      }
    }))
  }


}