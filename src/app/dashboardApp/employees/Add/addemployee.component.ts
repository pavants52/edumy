import { Component} from '@angular/core';
import { SharedService } from '../../../utilityApp/services/shared.service';
import { Employee } from '../employee';


@Component({
  selector: 'addemployee',
  templateUrl:  './addemployee.component.html'
////shhhhh
})
export class AddUserComponent {
  //title = 'app works!';
  employee:Employee = new Employee();
  constructor(private shared:SharedService){
          this.shared.emitTypeBroadcast();

  }
}
