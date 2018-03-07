import { Component } from '@angular/core';
import { SharedService } from '../../../utilityApp/services/shared.service';

@Component({
  selector: 'transportreport',
  templateUrl: './transportreport.component.html'
})
export class TransportReportComponent {
  //title = 'app works!';
 constructor(private shared:SharedService){
          this.shared.emitTypeBroadcast();
        }
}
