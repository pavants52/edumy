import { Component,OnInit} from '@angular/core';
import { ExamService } from './exam.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Router }            from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Exam } from "./exam";

@Component({
  selector: 'newexam',
  templateUrl: './newexam.component.html'
})
export class NewExamComponent {
  exam:Exam = new Exam();

  exams:Exam[];


  constructor( private route: ActivatedRoute,
               private location: Location,
               private examService:ExamService,
               private router: Router){ }

  ngOnInit():void {
    //get the list of student setting and populate the array
    this.getExams();
  }
  getExams(): void {
    this.examService.getExams().then(values => this.exams = values)
  }

  save():void {
    debugger;
    console.log("exam" +this.exam);
    if(!this.exam.id ){
      this.examService.create(this.exam)
        .then(res => {
          console.log("created" + res);
          this.exams.push(res);
          this.exam = new Exam();

        });
    } else  {
      this.examService.update(this.exam)
        .then(res => {
          console.log("created" + res);

          this.getExams();
          this.exam = new Exam();

        });
    }
  }
  update(id:number) {
    this.examService.getExam(id)
      .then(res => {
        this.exam = res;
      })
  }

  delete(id:number):void {
    this.examService.delete(id)
      .then(() => {
        console.log("deleted" + id);
        this.getExams();
        this.exam = new Exam();
      })
  }

  cancel():void {
    this.goToIcses();
  }
  goToIcses():void {
    this.router.navigate(['/newexam']);
  }

}
