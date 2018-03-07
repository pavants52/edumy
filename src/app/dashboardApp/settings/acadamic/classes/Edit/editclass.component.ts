import { Component,OnInit} from '@angular/core';
import { SharedService } from '../../../../../utilityApp/services/shared.service';
import { ClassModel } from '../classmodel';
import { ClassService } from '../class.service';
import {ReactiveFormsModule, FormGroup, FormBuilder} from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Router }            from '@angular/router';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'editclass',
  template:`
  <div class="wrapper wrapper-content animated fadeInRight class-menu">
    <div class="row">
      <form [formGroup]="myForm" novalidate (ngSubmit)="save(myForm.value, myForm.valid)">
		 <input type="hidden" name="id" class="form-control" formControlName="id">
		
		    <class-cm-form [formGroup]="myForm"> </class-cm-form>
           
        </form>
    </div>
</div>
  `
})
export class EditClassComponent implements OnInit {
  //title = 'app works!';
  classmodel:ClassModel;
  myForm: FormGroup;
  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private location: Location,
              private classService:ClassService,
              private router: Router) { }
  ngOnInit():void {
    this.myForm = this.fb.group({
      id:[''],
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

    this.route.paramMap
      .switchMap((params: ParamMap) => this.classService.getClassModel(+params.get('id')))
      .subscribe(classmodel => { this.classmodel = classmodel;
        (<FormGroup>this.myForm)
          .setValue(this.classmodel, { onlySelf: true });
      });
  }

  save(model: ClassModel):void {
    //this.submitted = true;
    debugger;
    console.log(model);

    this.classService.update(model)
      .then(() => {
        console.log("updated" + model);
        this.goToClassList();
      });
  }

  goToClassList():void {
    this.router.navigate(['/acadamicsettings/classes']);
  }
  cancel():void {
    this.goToClassList();
  }


}
