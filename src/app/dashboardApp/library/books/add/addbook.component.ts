import { Component} from '@angular/core';
import { SharedService } from '../../../../utilityApp/services/shared.service';
import { Book } from '../book';


@Component({
  selector: 'addbook',
  templateUrl:  './addbook.component.html'

})
export class AddBookComponent {
  //title = 'app works!';
  book:Book = new Book();
  constructor(private shared:SharedService){
          this.shared.emitTypeBroadcast();

  }
}
