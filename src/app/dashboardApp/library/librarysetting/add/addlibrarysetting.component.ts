import { Component} from '@angular/core';
import { SharedService } from '../../../../utilityApp/services/shared.service';
import { Librarysetting } from '../librarysetting';


@Component({
  selector: 'addlibrarysetting',
  templateUrl:  './addlibrarysetting.component.html'

})
export class AddLibrarySettingComponent {
  //title = 'app works!';

  librarysetting:Librarysetting = new Librarysetting();

  constructor(private shared:SharedService){
          this.shared.emitTypeBroadcast();

  }
}
