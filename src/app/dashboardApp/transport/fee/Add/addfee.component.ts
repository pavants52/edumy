import { Component} from '@angular/core';
import { SharedService } from '../../../../utilityApp/services/shared.service';
import { Fee } from '../fee';


@Component({
  selector: 'addfee',
  templateUrl:  './addfee.component.html'

})
export class AddFeeComponent {
  //title = 'app works!';
  fee:Fee = new Fee();
  constructor(private shared:SharedService){
    this.shared.emitTypeBroadcast();

  }
}
