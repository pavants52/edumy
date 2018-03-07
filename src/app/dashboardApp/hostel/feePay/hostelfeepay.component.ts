import { Component } from '@angular/core';
import { SharedService } from '../../../utilityApp/services/shared.service';

@Component({
  selector: 'hostelfeepay',
  templateUrl: './hostelfeepay.component.html'
})
export class HostelFeePayComponent {
  //title = 'app works!';
 constructor(private shared:SharedService){
          this.shared.emitTypeBroadcast();
        }
}
