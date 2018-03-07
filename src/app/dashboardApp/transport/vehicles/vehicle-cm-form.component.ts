import { Component,Input } from '@angular/core';
import {FormGroup} from '@angular/forms';
import { Vehicle } from './vehicle';
import { Router }  from '@angular/router';
import {VehicleService} from "./vehicle.service";

@Component({
  selector: 'vehicle-cm-form',
  templateUrl: './vehicle-cm-form.component.html'
})
export class VehicleCmFormComponent {
  @Input() vehicle:Vehicle;
  constructor(private router: Router,private vehicleService: VehicleService) { }

  saveVehicle():void {
    debugger;
    console.log("vehicle" + this.vehicle);
    if(!this.vehicle.id) {
      this.vehicleService.create(this.vehicle)
        .then(res => {
          console.log("created" + res);
          this.goToVehicleList();
          this.vehicle = res;

        });

    } else {
      this.vehicleService.update(this.vehicle)
        .then(() => {
          console.log("updated" + this.vehicle);
          this.goToVehicleList();
        })
    }

  }
  cancel():void {
    this.goToVehicleList();
  }
  goToVehicleList():void {
    this.router.navigate(['/vehiclelist']);
  }
}
