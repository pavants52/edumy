import { Component } from '@angular/core';
import { SharedService } from '../../utilityApp/services/shared.service';

@Component({
  selector: 'attendance',
  templateUrl: './attendance.component.html'
})
export class AttendanceComponent {
  //title = 'app works!';
  constructor(private shared:SharedService){
    this.shared.emitTypeBroadcast();
  }
}
