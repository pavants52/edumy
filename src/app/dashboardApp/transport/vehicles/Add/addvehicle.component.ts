import { Component} from '@angular/core';
import { SharedService } from '../../../../utilityApp/services/shared.service';
import { Vehicle } from '../vehicle';


@Component({
  selector: 'addvehicle',
  templateUrl:  './addvehicle.component.html'

})
export class AddVehicleComponent {
  //title = 'app works!';
  vehicle:Vehicle = new Vehicle();
  constructor(private shared:SharedService){
    this.shared.emitTypeBroadcast();

  }
}
