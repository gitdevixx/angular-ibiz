import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core'
import { TestSandbox } from '../test.sandbox';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  public submitted: boolean = false;

  constructor(
    public translate: TranslateService,
    public testSandbox: TestSandbox
  ) { }

  ngOnInit() {
  }

  public onSubmit(event: Event, userId: string): void {
    event.stopPropagation();
    this.submitted = true;

    this.testSandbox.getAnUserDetail(userId)

  }

}
