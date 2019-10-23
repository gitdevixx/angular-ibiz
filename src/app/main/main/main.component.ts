import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  title = 'angular-ibiz';
  public appName = { title: this.title };

  constructor(public translate: TranslateService) { }

  ngOnInit() {
  }

  public switchLanguage(lang: string): void {
    this.translate.use(lang)
    //다른 컴포넌트에서도 공유하려면 로컬에 설정값 저장 필요
    localStorage.setItem('selectedLanguage', lang)
  }

}
