import { Component,OnInit } from '@angular/core';
import { SharedService } from '../../../../utilityApp/services/shared.service';
import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';
import 'rxjs/add/operator/map';
@Component({
  selector: 'vehiclelist',
  templateUrl: './vehiclelist.component.html',

})
export class VehicleListComponent implements OnInit{
  //title = 'app works!';
  vehicles:Vehicle[];
  constructor(private vehicleService: VehicleService) { }

  ngOnInit():void {

    this.getVehicles();
  }

  getVehicles(): void {

    this.vehicleService.getVehicles().then(values => this.vehicles = values)

  }
}
