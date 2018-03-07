import { Component } from '@angular/core';
import { SharedService } from '../../../../utilityApp/services/shared.service';

@Component({
  selector: 'manage',
  templateUrl: './manage.component.html'
})
export class ManageComponent {
  //title = 'app works!';
  constructor(private shared:SharedService){
    this.shared.emitTypeBroadcast();
  }
}
