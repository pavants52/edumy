import { Component,OnInit} from '@angular/core';
import { SharedService } from '../../../../utilityApp/services/shared.service';
import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';

import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Router }            from '@angular/router';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'deletevehicle',
  templateUrl: './deletevehicle.component.html'
})
export class DeleteVehicleComponent implements OnInit {
  //title = 'app works!';
  vehicle:Vehicle;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private vehicleService:VehicleService,
              private router: Router) { }
  ngOnInit():void {

    this.route.paramMap
      .switchMap((params: ParamMap) => this.vehicleService.getVehicle(+params.get('id')))
      .subscribe(vehicle => {this.vehicle = vehicle;});
  }

  delete(model: Vehicle):void {
    //this.submitted = true;
    console.log(model);
    this.vehicleService.delete(model.id)
      .then(() => {
        console.log("deleted" + model);
        this.goToVehicleList();
      });
  }

  cancel():void {
    this.goToVehicleList();
  }

  goToVehicleList():void {
    this.router.navigate(['/vehiclelist']);
  }


}
