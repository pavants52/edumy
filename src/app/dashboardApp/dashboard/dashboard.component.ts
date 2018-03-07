import { Component } from '@angular/core';

import { SharedService } from '../../utilityApp/services/shared.service';

@Component({
  selector:'dashboard',
  templateUrl : './dashboard.component.html'
})

export class DashboardComponent {

constructor(private shared:SharedService
        ){
          this.shared.emitTypeBroadcast();
        }

}

