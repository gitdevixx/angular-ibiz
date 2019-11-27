import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

import { MinaSandbox } from '../mina.sandbox';
import { ValidationService } from '../../shared/service/validation.service'

@Component({
  selector: 'app-leo',
  templateUrl: './leo.component.html',
  styleUrls: [
    './external-source/bootstrap/css/bootstrap.css',
    './leo.component.css'
  ]
})
export class LeoComponent implements OnInit {
  vixxForm;
  langDatas = {pageName: 'VIXX'};

  constructor(
    private formBuilder: FormBuilder,
    private translate: TranslateService,
    // minaSandbox
    private minaSandbox: MinaSandbox
  ) { 
    this.vixxForm = this.formBuilder.group({
      id: ['', [Validators.required, ValidationService.numberValidator, Validators.minLength(4),]],
      text: '',
      name: ''
      // name: ['', Validators.minLength(4)]
    });

    // this.langDatas = {pageName: 'VIXX'};
  }

  resetForm() {
    this.vixxForm.reset();
  }

  onSubmit(formDatas) {
    console.log('sendData ===> ', formDatas);
    // sandbox 구현하기
    this.vixxForm.reset();
  }

  // minaFunc
  callMinaTest(event: Event, userId: string): void {
    event.stopPropagation();

    if(isNaN(Number(userId))) {
      window.alert('You can test only number!');
      document.getElementById('memberId').focus();
    } else {
      this.minaSandbox.getMyMinaDetail(userId);
    }
    
  }

  // 공통 service 가능한지 추후 확인하기
  public switchLanguage(lang: string): void {
    this.translate.use(lang)
    localStorage.setItem('selectedLanguage', lang)
  }

  ngOnInit() {
  }

}