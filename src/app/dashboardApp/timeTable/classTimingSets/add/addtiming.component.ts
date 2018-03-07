import { Component} from '@angular/core';
import { SharedService } from '../../../../utilityApp/services/shared.service';
import {Timing} from "../timing";


@Component({
  selector: 'addtiming',
  templateUrl:  './addtiming.component.html'

})
export class AddTimingComponent {
  //title = 'app works!';
  timing:Timing = new Timing();

  constructor(private shared:SharedService){
          this.shared.emitTypeBroadcast();

  }
}
