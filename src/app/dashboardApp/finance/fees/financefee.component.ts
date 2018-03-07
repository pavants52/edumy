import { Component } from '@angular/core';
import { SharedService } from '../../../utilityApp/services/shared.service';

@Component({
  selector: 'financefee',
  templateUrl: './financefee.component.html'
})
export class FinanceFeeComponent {
  //title = 'app works!';
   constructor(private shared:SharedService){
          this.shared.emitTypeBroadcast();
        }
}
