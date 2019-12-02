import { Component, OnInit } from '@angular/core';
import { IdolService } from '../../shared/service/idol.service'
import { TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-idol-pick',
  templateUrl: './idol-pick.component.html',
  styleUrls: ['./idol-pick.component.scss']
})
export class IdolPickComponent implements OnInit {

  idols: Array<JSON>;

  constructor(
    private idolService: IdolService,
    public translate: TranslateService,

  ) {

  }

  ngOnInit() {
    this.idolService.getIdols().subscribe((idols: Array<JSON>) => {
      this.idols = idols;
      console.log(this.idols);
    });
  }

}
