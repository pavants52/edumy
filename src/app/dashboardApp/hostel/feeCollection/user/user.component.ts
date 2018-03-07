import { Component } from '@angular/core';
import { SharedService } from '../../../../utilityApp/services/shared.service';

@Component({
  selector: 'user',
  templateUrl: './user.component.html'
})
export class UserComponent {
  //title = 'app works!';
  constructor(private shared:SharedService){
    this.shared.emitTypeBroadcast();
  }
}
