import { Component} from '@angular/core';
import { SharedService } from '../../../../utilityApp/services/shared.service';
import { Hostel } from '../hostel';


@Component({
  selector: 'addhostel',
  templateUrl:  './addhostel.component.html'

})
export class AddHostelComponent {
  //title = 'app works!';
  hostel:Hostel = new Hostel();
  constructor(private shared:SharedService){
    this.shared.emitTypeBroadcast();

  }
}
