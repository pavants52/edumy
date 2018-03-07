import { Component,OnInit} from '@angular/core';
import { SharedService } from '../../../../utilityApp/services/shared.service';
import { Timing } from '../timing';
import { TimingService } from '../timing.service';

import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Router }            from '@angular/router';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'deletetiming',
  templateUrl: './deletetiming.component.html'
})
export class DeleteTimingComponent implements OnInit {
  //title = 'app works!';
  timing:Timing;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private timingService:TimingService,
              private router: Router) { }
  ngOnInit():void {

    this.route.paramMap
      .switchMap((params: ParamMap) => this.timingService.getTiming(+params.get('id')))
      .subscribe(timing => {this.timing = timing;});
  }

  delete(model: Timing):void {
    //this.submitted = true;
    console.log(model);
    this.timingService.delete(model.id)
      .then(() => {
        console.log("deleted" + model);
        this.goToTimingList();
      });
  }

  cancel():void {
    this.goToTimingList();
  }

  goToTimingList():void {
    this.router.navigate(['/timinglist']);
  }


}
