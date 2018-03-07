import { Component } from '@angular/core';
import { SharedService } from '../../../utilityApp/services/shared.service';
import { Student } from '../student';

@Component({
  selector: 'addstudent',
  templateUrl: './addstudent.component.html'
})
export class AddStudentComponent {
  //title = 'app works!';
  student:Student = new Student();
  constructor(private shared:SharedService){
          this.shared.emitTypeBroadcast();
        }
}
