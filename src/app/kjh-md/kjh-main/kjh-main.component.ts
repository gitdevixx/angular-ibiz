import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kjh-main',
  templateUrl: './kjh-main.component.html',
  styleUrls: ['./kjh-main.component.css']
})
//http://www.incodom.kr/Angular_%EA%B8%B0%EC%B4%88_%EB%AC%B8%EB%B2%95_1
// https://dschci.tistory.com/86
export class KjhMainComponent implements OnInit {

  public clickCnt : number = 0;
  public viewText : string = "";

  
  constructor() { }

  ngOnInit() {
  }

  public cntButtonClick(event: Event): void {
    event.stopPropagation();
    
    this.clickCnt += 1;

    // console.log('111')
    // window.alert('dkdkdk')

  }

  public textSumButton(event: Event, inputText : String): void {
    event.stopPropagation();
    
    this.viewText += inputText + "\n";

  }

  

}
