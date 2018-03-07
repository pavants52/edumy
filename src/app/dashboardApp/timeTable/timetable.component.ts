import { Component } from '@angular/core';
import { SharedService } from '../../utilityApp/services/shared.service';

@Component({
  selector: 'timetable',
  templateUrl: './timetable.component.html'
})
export class TimetableComponent {
  //title = 'app works!';
 constructor(private shared:SharedService){
          this.shared.emitTypeBroadcast();
        }
}
