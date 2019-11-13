import { Component, OnInit } from '@angular/core';
import { KjhMdSandbox } from '../kjh-md.sandbox';
import {AngularFirestore, AngularFirestoreCollection, DocumentReference} from '@angular/fire/firestore';
import { AngularFireStorage} from '@angular/fire/storage';
import { BehaviorSubject } from 'rxjs';
 
@Component({
  selector: 'app-kjh-toolbar',
  templateUrl: './kjh-toolbar.component.html',
  styleUrls: ['./kjh-toolbar.component.css']
})
export class KjhToolbarComponent implements OnInit {


  //데이터 베이스 관련 객체
  private DataBase : AngularFirestore;
  private itemsCollection: AngularFirestoreCollection<any>;
  private items : BehaviorSubject<any[]> = new BehaviorSubject([]);
  //나중에 쓸 저장소 관련 객체
  private storage : AngularFireStorage;


  constructor(
    public kjhMdSandbox : KjhMdSandbox,
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

    this.kjhMdSandbox.getAnUserDetailkjh(userId);

  }
  getItem(db_name : string){
    this.itemsCollection = this.DataBase.collection<any>(db_name, (ref) =>ref);  //컬렉션에 접속
    this.itemsCollection.valueChanges().forEach((val)=>{  //데이터를 가져오기
      this.items.next(val);  // 구독중인 대상에 데이터를 밀어주기
    });    
    return this.items;  //리턴
  }


}
