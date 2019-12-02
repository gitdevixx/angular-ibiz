import { Component, OnInit, Input } from '@angular/core';
import { IdolService } from '../../shared/service/idol.service'
import { transition, trigger, useAnimation } from '@angular/animations';
import { fadeIn } from 'ng-animate';
import { CookieService } from 'ngx-cookie';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core'

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

  canVote: boolean;
  defaultImage = "../../assets/images/default-idol.png"

  constructor(
    private idolService: IdolService,
    private snackBar: MatSnackBar,
    private cookieService: CookieService,
    public translate: TranslateService,

  ) {

  }

  ngOnInit() {
    this.canVote = this.idolService.checkIfUserCanVote();
  }

  like(idol: JSON): Promise<void> {
    if (this.canVote) {
      idol['likes'] += 1;
      this.cookieService.put('votes', '' + (Number(this.cookieService.get('votes') || 0) + 1));
      return this.idolService.updateIdol(idol);
    } else {
      this.snackBar.open(this.translate.instant('idol.cantVoteMsg'), '', {duration: 1000});
    }
  }

}
