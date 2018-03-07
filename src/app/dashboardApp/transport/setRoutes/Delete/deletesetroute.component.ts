import { Component,OnInit} from '@angular/core';
import { SharedService } from '../../../../utilityApp/services/shared.service';
import { Setroute } from '../setroute';
import { RouteService } from '../route.service';

import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Router }            from '@angular/router';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'deletesetroute',
  templateUrl: './deletesetroute.component.html'
})
export class DeleteSetRouteComponent implements OnInit {
  //title = 'app works!';
  setroute:Setroute;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private routeService:RouteService,
              private router: Router) { }
  ngOnInit():void {

    this.route.paramMap
      .switchMap((params: ParamMap) => this.routeService.getSetroute(+params.get('id')))
      .subscribe(setroute => {this.setroute = setroute;});
  }

  delete(model: Setroute):void {
    //this.submitted = true;
    console.log(model);
    this.routeService.delete(model.id)
      .then(() => {
        console.log("deleted" + model);
        this.goToSetRouteList();
      });
  }

  cancel():void {
    this.goToSetRouteList();
  }

  goToSetRouteList():void {
    this.router.navigate(['/setroutelist']);
  }


}
