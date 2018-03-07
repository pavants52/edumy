import { Component,Input} from '@angular/core';
import {FormGroup} from '@angular/forms';
import { Student } from './student';
import { StudentService } from './student.service';
import { Router }            from '@angular/router';

@Component({
  selector: 'student-cm-form',
  templateUrl: './student-cm-form.component.html'
})
export class StudentCmFormComponent {

    @Input() student:Student;
   constructor(private router: Router,private studentService: StudentService) { }

    saveStudent():void {
		debugger;
	  console.log("student" + this.student);
	  if(!this.student.id) {
			 this.studentService.create(this.student)
			  .then(res => {
				console.log("created" + res);
          this.goToStudentList();
				this.student = res;
			  });
	  } else {
		this.studentService.update(this.student)
		.then(() => {
        console.log("updated" + this.student);
      this.goToStudentList();
		})
	  }

   }
	cancel():void {
		this.goToStudentList();
	}
  goToStudentList():void {
		this.router.navigate(['/studentlist']);
	}
}
