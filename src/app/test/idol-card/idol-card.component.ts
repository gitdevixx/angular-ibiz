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
  
  defaultImage = "../../assets/images/default-idol.png"

  constructor(
    private idolService: IdolService,

  ) {

  }

  ngOnInit() {
  }

  like(idol: JSON): Promise<void> {
    idol['likes'] += 1;
    return this.idolService.updateIdol(idol);
  }

}
