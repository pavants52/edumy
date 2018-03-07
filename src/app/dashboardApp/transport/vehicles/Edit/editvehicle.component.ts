import { Component,OnInit} from '@angular/core';
import { SharedService } from '../../../../utilityApp/services/shared.service';
import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';
import {ReactiveFormsModule, FormGroup, FormBuilder} from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Router }            from '@angular/router';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'editvehicle',
  templateUrl: './editvehicle.component.html'
})
export class EditVehicleComponent implements OnInit{
  //title = 'app works!';
  vehicle:Vehicle = new Vehicle();
  constructor( private route: ActivatedRoute,
               private location: Location,
               private vehicleService:VehicleService,
               private router: Router){ }

  ngOnInit():void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.vehicleService.getVehicle(+params.get('id')))
      .subscribe(vehicle => {this.vehicle = vehicle;});
  }
}
