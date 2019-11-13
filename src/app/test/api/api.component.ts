import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core'
import { TestSandbox } from '../test.sandbox';
import {AngularFirestore, AngularFirestoreCollection, DocumentReference} from '@angular/fire/firestore';
import { AngularFireStorage} from '@angular/fire/storage';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  public submitted: boolean = false;

  //데이터 베이스 관련 객체
  private DataBase : AngularFirestore;
  private itemsCollection: AngularFirestoreCollection<any>;
  private items : BehaviorSubject<any[]> = new BehaviorSubject([]);
  //나중에 쓸 저장소 관련 객체
  private storage : AngularFireStorage;

  constructor(
    public translate: TranslateService,
    public testSandbox: TestSandbox,
    private afs: AngularFirestore,
    private strg : AngularFireStorage
  ) { 
    this.DataBase = afs;
    this.storage = strg;
    this.getItem('idol').subscribe((res)=>{  //idol 컬렉션에 대해서 구독행위 시작
      console.log(res);
    });
  }

  ngOnInit() {
  }

  public onSubmit(event: Event, userId: string): void {
    event.stopPropagation();
    this.submitted = true;

    this.testSandbox.getAnUserDetail(userId)

  }

  getItem(db_name : string){
    this.itemsCollection = this.DataBase.collection<any>(db_name, (ref) =>ref);  //컬렉션에 접속
    this.itemsCollection.valueChanges().forEach((val)=>{  //데이터를 가져오기
      this.items.next(val);  // 구독중인 대상에 데이터를 밀어주기
    });    
    return this.items;  //리턴
  }

}
