import { Component,OnInit} from '@angular/core';
import { AssessmentService } from './assessment.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Router }            from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Assessment } from "./assessment";

@Component({
  selector: 'assessmentgroup',
  templateUrl: './assessmentgroup.component.html'
})
export class AssessmentGroupComponent {
  assessment:Assessment = new Assessment();

  assessments:Assessment[];


  constructor( private route: ActivatedRoute,
               private location: Location,
               private assessmentService:AssessmentService,
               private router: Router){ }

  ngOnInit():void {
    //get the list of student setting and populate the array
    this.getAssessments();
  }
  getAssessments(): void {
    this.assessmentService.getAssessments().then(values => this.assessments = values)
  }

  save():void {
    debugger;
    console.log("assessment" +this.assessment);
    if(!this.assessment.id ){
      this.assessmentService.create(this.assessment)
        .then(res => {
          console.log("created" + res);
          this.assessments.push(res);
          this.assessment = new Assessment();

        });
    } else  {
      this.assessmentService.update(this.assessment)
        .then(res => {
          console.log("created" + res);

          this.getAssessments();
          this.assessment = new Assessment();

        });
    }
  }
  update(id:number) {
    this.assessmentService.getAssessment(id)
      .then(res => {
        this.assessment = res;
      })
  }

  delete(id:number):void {
    this.assessmentService.delete(id)
      .then(() => {
        console.log("deleted" + id);
        this.getAssessments();
        this.assessment = new Assessment();
      })
  }

  cancel():void {
    this.goToAssessments();
  }
  goToAssessments():void {
    this.router.navigate(['/assessmentgroup']);
  }

}
