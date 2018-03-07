import { Component } from '@angular/core';
import { SharedService } from '../../../utilityApp/services/shared.service';

@Component({
  selector: 'financeassetmanagement',
  templateUrl: './financeassetmanagement.component.html'
})
export class FinanceAssetManagementComponent {
  //title = 'app works!';
   constructor(private shared:SharedService){
          this.shared.emitTypeBroadcast();
        }
}
