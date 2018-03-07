import { Component} from '@angular/core';
import { SharedService } from '../../../../../utilityApp/services/shared.service';
import { Batchpay } from '../batchpay';


@Component({
  selector: 'addbatchpay',
  templateUrl:  './addbatchpay.component.html'

})
export class AddBatchPayComponent {
  //title = 'app works!';
  batchpay:Batchpay = new Batchpay();
  constructor(private shared:SharedService){
    this.shared.emitTypeBroadcast();

  }
}
