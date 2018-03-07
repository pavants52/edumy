import { Component } from '@angular/core';
import { SharedService } from '../../../utilityApp/services/shared.service';

@Component({
  selector: 'financetransaction',
  templateUrl: './financetransaction.component.html'
})
export class FinanceTransactionComponent {
  //title = 'app works!';
  constructor(private shared:SharedService){
          this.shared.emitTypeBroadcast();
        }
}
