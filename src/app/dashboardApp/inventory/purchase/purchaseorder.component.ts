import { Component } from '@angular/core';
import { SharedService } from '../../../utilityApp/services/shared.service';

@Component({
  selector: 'purchaseorder',
  templateUrl: './purchaseorder.component.html'
})
export class PurchaseOrderComponent {
  //title = 'app works!';
  constructor(private shared:SharedService){
          this.shared.emitTypeBroadcast();
        }
}
