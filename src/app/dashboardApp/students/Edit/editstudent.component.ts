import { Component,OnInit } from '@angular/core';
import { SharedService } from '../../../utilityApp/services/shared.service';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Router }            from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'addstudent',
  templateUrl: './editstudent.component.html'
})
export class EditStudentComponent implements OnInit{
  //title = 'app works!';
  student:Student;
  constructor( private route: ActivatedRoute,
    private location: Location,
	private studentService:StudentService,
	private router: Router){ }

	ngOnInit():void {
	 this.route.paramMap
      .switchMap((params: ParamMap) => this.studentService.getStudent(+params.get('id')))
      .subscribe(student => {this.student = student;});
	  }
}
