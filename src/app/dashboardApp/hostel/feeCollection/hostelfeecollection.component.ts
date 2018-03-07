import { Component } from '@angular/core';
import { SharedService } from '../../../utilityApp/services/shared.service';

@Component({
  selector: 'hostelfeecollection',
  templateUrl: './hostelfeecollection.component.html'
})
export class HostelFeeCollectionComponent {
  //title = 'app works!';
  constructor(private shared:SharedService){
          this.shared.emitTypeBroadcast();
        }
}
