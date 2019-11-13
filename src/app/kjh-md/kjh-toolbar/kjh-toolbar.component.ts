import { Component, OnInit } from '@angular/core';
import { KjhMdSandbox } from '../kjh-md.sandbox';
 
@Component({
  selector: 'app-kjh-toolbar',
  templateUrl: './kjh-toolbar.component.html',
  styleUrls: ['./kjh-toolbar.component.css']
})
export class KjhToolbarComponent implements OnInit {

  constructor(
    public kjhMdSandbox : KjhMdSandbox
  ) { }

  ngOnInit() {
  }

  public onSubmit(event: Event, userId: string): void {
    event.stopPropagation();

    this.kjhMdSandbox.getAnUserDetailkjh(userId);

  }

}
