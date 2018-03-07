import { Component} from '@angular/core';
import { SharedService } from '../../../../../utilityApp/services/shared.service';
import { Batchfee } from '../batchfee';


@Component({
  selector: 'addbatchfee',
  templateUrl:  './addbatchfee.component.html'

})
export class AddBatchFeeComponent {
  //title = 'app works!';
  batchfee:Batchfee = new Batchfee();
  constructor(private shared:SharedService){
    this.shared.emitTypeBroadcast();

  }
}
