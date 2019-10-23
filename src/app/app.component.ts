import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Angular';
  private translate: TranslateService

  constructor(translate: TranslateService) {
    this.translate = translate
  }

  ngOnInit(): void {
    const language: string = localStorage.getItem('selectedLanguage') || 'en';
    this.translate.setDefaultLang(language)
  }
}
