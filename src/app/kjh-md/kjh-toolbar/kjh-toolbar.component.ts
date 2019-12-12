import { Component, OnInit } from '@angular/core';
import { KjhMdSandbox } from '../kjh-md.sandbox';
import {AngularFirestore, AngularFirestoreCollection, DocumentReference} from '@angular/fire/firestore';
import { AngularFireStorage} from '@angular/fire/storage';
import { BehaviorSubject } from 'rxjs';

import { map } from "rxjs/operators"; 
 
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

  private searchTextItem ;



  constructor(
    public kjhMdSandbox : KjhMdSandbox,
    private afs: AngularFirestore,
    private strg : AngularFireStorage
  ) {
    this.DataBase = afs;
    this.storage = strg;
    this.itemsCollection = this.DataBase.collection<any>('searchText', (ref) =>ref); 
    
    this.getItem().subscribe((res)=>{  //idol 컬렉션에 대해서 구독행위 시작
      this.searchTextItem   = res;
      // console.log(res);
    });
    console.log(this.searchTextItem);
    


    // setTimeout(()=>{  //시간차로 등록해보기!
    //   this.setSearchText('searchText',{searchtext: "노트북",status: "C",userNo: "kjh"});
    // },5000);
   }

  ngOnInit() {
  }

  public onSubmit(event: Event, userId: string): void {
    event.stopPropagation();

    this.kjhMdSandbox.getAnUserDetailkjh(userId);

  }
  getItem(){
    this.itemsCollection.valueChanges().forEach((val)=>{  //데이터를 가져오기
      this.items.next(val);  // 구독중인 대상에 데이터를 밀어주기
    });    
    

    return this.items;  //리턴
  }

  //데이터 넣기
  addSearchText(searchText : string){
    var insertData = {searchtext: searchText,status: "C",userNo: "kjh"};
    console.log(insertData)
    
    // this.itemsCollection.valueChanges();    
    this.itemsCollection.add(insertData); 

    
    // this.itemsCollection.doc('sgSKuysbNXWMQGeEw5Ch').delete();

  }

  deleteSearchText(deleteText: string){
    // var searchTextItem =  this.getItem();
    // console.log(deleteText)
    // for(var i = 0 ; i < searchTextItem.getValue().length; i++){
    //   // if(searchTextItem.getValue()[i].searchtext == deleteText){
    //     console.log(searchTextItem.getValue()[i].searchtext)  
    //   this.itemsCollection.doc(deleteText).delete();
    //   // }
    // }

    var subscription = this.itemsCollection.stateChanges().pipe(map( changes => { //pip 함수는 map 함수를 붙여주는 역할을 한다.
      return changes.map(a=>{  //map 함수는 데이터의 내용을 바꾸는 역할을 한다.
        const data = a.payload.doc.data() as any;
        const ID = a.payload.doc.id; //고유 아이디 값
        console.log(ID)
        if(data.searchtext == deleteText){  // idx는 사용자가 만들어준 키 값 이다.
          this.itemsCollection.doc(ID).delete();  //key를 통해 삭제한다.
        }
        return data;
      });
    })).subscribe((oo)=>{  //해당 수정행위를 구독한다.
      subscription.unsubscribe();  //getItem 함수를 통해 구독을 하고 있기 때문에 여기서 수정한 구독행위는 바로 종료시킨다.
    });
    

  }


}
