import { Component } from '@angular/core';
import { SharedService } from '../../../utilityApp/services/shared.service';

@Component({
  selector: 'exammanagement',
  templateUrl: './exammanagement.component.html'
})
export class ExamManagementComponent {
  //title = 'app works!';
  constructor(private shared:SharedService){
          this.shared.emitTypeBroadcast();
        }
}
