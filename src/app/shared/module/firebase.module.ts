import {NgModule} from '@angular/core';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule, FirestoreSettingsToken} from '@angular/fire/firestore';
import { AngularFireStorageModule, StorageBucket } from '@angular/fire/storage';
import {environment} from '../../../environments/environment';

@NgModule({
  imports: [
    AngularFireModule.initializeApp(environment.firebase, '/'),
    // AngularFireModule.initializeApp(environment.firebase_kjh, '/'),
    AngularFirestoreModule,
    AngularFireStorageModule,//파이어베이스 파일 저장소 관련된 모듈 사용
  ],
  exports: [
    AngularFireModule,
    AngularFirestoreModule
  ],
  providers: [{provide: FirestoreSettingsToken, useValue: {}}]
})

export class FirebaseModule {
}
