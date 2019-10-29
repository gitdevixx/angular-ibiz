import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-leo',
  templateUrl: './leo.component.html',
  styleUrls: [
    './leo.component.css',
    './external-source/bootstrap/css/bootstrap.css',
    './external-source/simple-line/css/stylish-portfolio.css',
    './external-source/simple-line/css/simple-line-icons.css'
  ]
})
export class LeoComponent implements OnInit {
  vixxForm;
  langDatas = {pageName: 'VIXX'};

  constructor(
    private formBuilder: FormBuilder,
    private translate: TranslateService
  ) { 
    this.vixxForm = this.formBuilder.group({
      id: '',
      text: ''
    });

    // this.pageName = {testTitle: 'VIXX'};
  }

  resetForm() {
    this.vixxForm.reset();
  }

  onSubmit(formDatas) {
    console.warn('sendData ===> ', formDatas);
    // sandbox 구현하기
    this.vixxForm.reset();
  }

  // 공통 service 가능한지 추후 확인하기
  public switchLanguage(lang: string): void {
    this.translate.use(lang)
    localStorage.setItem('selectedLanguage', lang)
  }

  ngOnInit() {
  }

}