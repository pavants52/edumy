import { Component } from '@angular/core';
import { SharedService } from '../../utilityApp/services/shared.service';

@Component({
  selector: 'applicantregistration',
  templateUrl: './applicantregistration.component.html'
})
export class ApplicantRegistrationComponent {
  //title = 'app works!';
  constructor(private shared:SharedService){
          this.shared.emitTypeBroadcast();
        }
}
