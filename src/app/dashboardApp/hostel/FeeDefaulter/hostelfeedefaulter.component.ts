import { Component } from '@angular/core';
import { SharedService } from '../../../utilityApp/services/shared.service';

@Component({
  selector: 'hostelfeedefaulter',
  templateUrl: './hostelfeedefaulter.component.html'
})
export class HostelFeeDefaulterComponent {
  //title = 'app works!';
   constructor(private shared:SharedService){
          this.shared.emitTypeBroadcast();
        }
}
