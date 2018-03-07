import { Component,OnInit } from '@angular/core';
import { SharedService } from '../../../utilityApp/services/shared.service';
import { Student } from '../student';
import { StudentService } from '../student.service';
@Component({
  selector: 'studentlist',
  templateUrl: './studentlist.component.html',

})
export class StudentListComponent implements OnInit{
  //title = 'app works!';
  students:Student[];
  constructor(private studentService: StudentService) { }

  ngOnInit():void {
	  this.getStudents();
	}
  getStudents(): void {
	 this.studentService.getStudents().then(values => {
	 debugger;
	 this.students = values})
  }
}
