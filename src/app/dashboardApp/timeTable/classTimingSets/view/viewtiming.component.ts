import { Component,OnInit} from '@angular/core';
import { SharedService } from '../../../../utilityApp/services/shared.service';
import { Timing } from '../timing';
import { TimingService } from '../timing.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Router }            from '@angular/router';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'viewtiming',
  templateUrl: './viewtiming.component.html'
})
export class ViewTimingComponent implements OnInit{
  //title = 'app works!';
  timing:Timing;
  constructor( private route: ActivatedRoute,
               private location: Location,
               private timingService:TimingService,
               private router: Router){ }

  ngOnInit():void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.timingService.getTiming(+params.get('id')))
      .subscribe(timing => {this.timing = timing;});
  }
}
