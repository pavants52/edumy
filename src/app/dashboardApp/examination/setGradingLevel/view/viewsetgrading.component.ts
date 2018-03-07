import { Component,OnInit} from '@angular/core';
import { SharedService } from '../../../../utilityApp/services/shared.service';
import { Setgrading } from '../setgrading';
import { SetgradingService } from '../setgrading.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Router }            from '@angular/router';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'viewsetgrading',
  templateUrl: './viewsetgrading.component.html'
})
export class ViewSetGradingComponent implements OnInit{
  //title = 'app works!';
  setgrading:Setgrading;
  constructor( private route: ActivatedRoute,
               private location: Location,
               private setgradingService:SetgradingService,
               private router: Router){ }

  ngOnInit():void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.setgradingService.getSetgrading(+params.get('id')))
      .subscribe(setgrading => {this.setgrading = setgrading;});
  }
}
