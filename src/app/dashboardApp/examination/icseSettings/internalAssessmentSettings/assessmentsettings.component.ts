import { Component } from '@angular/core';
import { SharedService } from '../../../../utilityApp/services/shared.service';

@Component({
  selector: 'assessmentsettings',
  templateUrl: './assessmentsettings.component.html'
})
export class AssessmentSettingsComponent {
  //title = 'app works!';
  constructor(private shared:SharedService){
          this.shared.emitTypeBroadcast();
        }
}
