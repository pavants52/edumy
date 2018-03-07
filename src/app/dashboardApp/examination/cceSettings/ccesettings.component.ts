import { Component } from '@angular/core';
import { SharedService } from '../../../utilityApp/services/shared.service';

@Component({
  selector: 'ccesettings',
  templateUrl: './ccesettings.component.html'
})
export class CceSettingsComponent {
  //title = 'app works!';
  constructor(private shared:SharedService){
          this.shared.emitTypeBroadcast();
        }
}
