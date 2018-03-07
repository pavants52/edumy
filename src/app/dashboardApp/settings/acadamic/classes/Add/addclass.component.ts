import { Component,OnInit} from '@angular/core';
import { SharedService } from '../../../../../utilityApp/services/shared.service';
import { ClassModel } from '../classmodel';
import {ReactiveFormsModule, FormGroup, FormBuilder} from '@angular/forms';
import { Router }            from '@angular/router';
import { ClassService } from '../class.service';

@Component({
  selector: 'addclass',
  template:`
  <div class="wrapper wrapper-content animated fadeInRight class-menu">
    <div class="row">
      <form [formGroup]="myForm" novalidate (ngSubmit)="save(myForm.value, myForm.valid)">
		
		<class-cm-form [formGroup]="myForm"> </class-cm-form>           
        </form>
    </div>
</div>

  `
})
export class AddClassComponent implements OnInit {
  //title = 'app works!';
  myForm: FormGroup;
  constructor(private fb: FormBuilder,private classService: ClassService,private router: Router) { }
  ngOnInit():void {
    this.myForm = this.fb.group({
      name:[''],
      sectionName:[''],
      code:[''],
      grading:[''],
      elective:[''],
      batch:[''],
      newName:[''],
      startDate:[''],
      endDate:['']
    });

  }
  save(model: ClassModel):void {
    //this.submitted = true;
    debugger;
    console.log(model);

    this.classService.create(model)
      .then(classmodel => {
        console.log("created" + classmodel);
        this.goToClassList();
      });
  }
  cancel():void {
    this.goToClassList();
  }
  goToClassList():void {
    this.router.navigate(['/acadamicsettings/classes']);
  }
}
