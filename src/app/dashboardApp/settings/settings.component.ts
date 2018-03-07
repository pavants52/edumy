import { Component } from '@angular/core';
import { SharedService } from '../../utilityApp/services/shared.service';

@Component({
  selector: 'settings',
  templateUrl: './settings.component.html'
})
export class SettingsComponent {
  //title = 'app works!';
 constructor(private shared:SharedService){
          this.shared.emitTypeBroadcast();
        }
}
