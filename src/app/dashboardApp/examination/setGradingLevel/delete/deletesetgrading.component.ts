import { Component,OnInit} from '@angular/core';
import { SharedService } from '../../../../utilityApp/services/shared.service';
import { Setgrading } from '../setgrading';
import { SetgradingService } from '../setgrading.service';

import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Router }            from '@angular/router';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'deletesetgrading',
  templateUrl: './deletesetgrading.component.html'
})

export class DeleteSetGradingComponent implements OnInit {
  //title = 'app works!';
  setgrading:Setgrading;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private setgradingService:SetgradingService,
              private router: Router) { }
  ngOnInit():void {

    this.route.paramMap
      .switchMap((params: ParamMap) => this.setgradingService.getSetgrading(+params.get('id')))
      .subscribe(setgrading => {this.setgrading = setgrading;});
  }

  delete(model: Setgrading):void {
    //this.submitted = true;
    console.log(model);
    this.setgradingService.delete(model.id)
      .then(() => {
        console.log("deleted" + model);
        this.goToSetgradingList();
      });
  }

  cancel():void {
    this.goToSetgradingList();
  }

  goToSetgradingList():void {
    this.router.navigate(['/setgradinglist']);
  }


}
