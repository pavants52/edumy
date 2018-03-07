import { Component } from '@angular/core';
import { SharedService } from '../../../utilityApp/services/shared.service';

@Component({
  selector: 'financedonation',
  templateUrl: './financedonation.component.html'
})
export class FinanceDonationComponent {
  //title = 'app works!';
    constructor(private shared:SharedService){
          this.shared.emitTypeBroadcast();
        }
}
