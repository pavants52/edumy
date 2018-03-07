import { Component } from '@angular/core';
import { SharedService } from '../../../../utilityApp/services/shared.service';



@Component({
  selector: 'reverted',
  templateUrl: './reverted.component.html'
})
export class RevertedComponent {

  details = [
    {
      id: 1,text: 'Test 1',batch: '001' ,admin: '001'
    },
    {
      id: 2,text: 'Test 2',batch: '002' ,admin: '002'
    },

  ];

}
