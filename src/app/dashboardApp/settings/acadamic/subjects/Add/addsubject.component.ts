import { Component,OnInit} from '@angular/core';
import { SharedService } from '../../../../../utilityApp/services/shared.service';
import { Subject } from '../subject';
import {ReactiveFormsModule, FormGroup, FormBuilder} from '@angular/forms';
import { Router }            from '@angular/router';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'addsubject',
  template:`
  <div class="wrapper wrapper-content animated fadeInRight subject-menu">
    <div class="row">
      <form [formGroup]="myForm" novalidate (ngSubmit)="save(myForm.value, myForm.valid)">
		
		<subject-cm-form [formGroup]="myForm"> </subject-cm-form>
           
        </form>
    </div>
</div>

  `
})
export class AddSubjectComponent implements OnInit {
  //title = 'app works!';
  myForm: FormGroup;
  constructor(private fb: FormBuilder,private subjectService: SubjectService,private router: Router) { }
  ngOnInit():void {
    this.myForm = this.fb.group({
      name:[''],
      code:[''],
      selectBatch:[''],
      classes:[''],
      exam:['']
    });

  }


  save(model: Subject):void {
    //this.submitted = true;
    debugger;
    console.log(model);

    this.subjectService.create(model)
      .then(subject => {
        console.log("created" + subject);
        this.goToSubject();
      });

  }
  cancel():void {
    this.goToSubject();
  }
  goToSubject():void {
    this.router.navigate(['/acadamicsettings/subjects']);
  }
}
