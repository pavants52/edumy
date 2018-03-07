import { Component,OnInit} from '@angular/core';
import { SharedService } from '../../../../../utilityApp/services/shared.service';
import { Subject } from '../subject';
import { SubjectService } from '../subject.service';
import {ReactiveFormsModule, FormGroup, FormBuilder} from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Router }            from '@angular/router';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'editsubject',
  template:`
  <div class="wrapper wrapper-content animated fadeInRight subject-menu">
    <div class="row">
      <form [formGroup]="myForm" novalidate (ngSubmit)="save(myForm.value, myForm.valid)">
		 <input type="hidden" name="id" class="form-control" formControlName="id">
		
		    <subject-cm-form [formGroup]="myForm"> </subject-cm-form>
           
        </form>
    </div>
</div>
  `
})
export class EditSubjectComponent implements OnInit {
  //title = 'app works!';
  subject:Subject;
  myForm: FormGroup;
  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private location: Location,
              private subjectService:SubjectService,
              private router: Router) { }
  ngOnInit():void {
    this.myForm = this.fb.group({
      id:[''],
      name:[''],
      code:[''],
      selectBatch:[''],
      classes:[''],
      exam:['']
    });


    this.route.paramMap
      .switchMap((params: ParamMap) => this.subjectService.getSubject(+params.get('id')))
      .subscribe(subject => { this.subject = subject;
        (<FormGroup>this.myForm)
          .setValue(this.subject, { onlySelf: true });
      });
  }

  save(model: Subject):void {
    //this.submitted = true;
    debugger;
    console.log(model);

    this.subjectService.update(model)
      .then(() => {
        console.log("updated" + model);
        this.goToClass();
      });
  }

  goToClass():void {
    this.router.navigate(['/acadamicsettings/subjects']);
  }
  cancel():void {
    this.goToClass();
  }


}
