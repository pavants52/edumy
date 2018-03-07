import { Component} from '@angular/core';
import { SharedService } from '../../../../utilityApp/services/shared.service';
import { Setgrading } from '../setgrading';


@Component({
  selector: 'addsetgrading',
  templateUrl:  './addsetgrading.component.html'

})
export class AddSetGradingComponent {
  //title = 'app works!';

  setgrading:Setgrading = new Setgrading();

  constructor(private shared:SharedService){
          this.shared.emitTypeBroadcast();

  }
}
