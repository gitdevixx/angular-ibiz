import { Component, OnInit, Input } from '@angular/core';
import { IdolService } from '../../shared/service/idol.service'
import { transition, trigger, useAnimation } from '@angular/animations';
import { fadeIn } from 'ng-animate';

@Component({
  selector: 'app-idol-card',
  templateUrl: './idol-card.component.html',
  styleUrls: ['./idol-card.component.scss'],
  animations: [
    trigger('fadeIn', [transition('* => *', useAnimation(fadeIn, {
      params: { timing: 1, delay: 0 }
    }))])
  ]
})
export class IdolCardComponent implements OnInit {

  @Input() idol: JSON;
  // defaultImage_url = "https://github.com/gitdevixx/angular-ibiz/blob/master/src/assets/images/Martian.png?raw=true"
  // defaultImage_url = "../../assets/images/iu.jpg"
  defaultImage_url = "https://github.com/gitdevixx/angular-ibiz/blob/master/src/assets/images/vixxDynamite.jpg?raw=true"

  constructor(
    private idolService: IdolService,

  ) {

  }

  ngOnInit() {
  }

  like(idol: JSON): Promise<void> {
    return null;
  }

}
