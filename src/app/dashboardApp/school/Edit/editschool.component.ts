import { Component,OnInit} from '@angular/core';
import { SharedService } from '../../../utilityApp/services/shared.service';
import { School } from '../school';
import { SchoolService } from '../school.service';
import {ReactiveFormsModule, FormGroup, FormBuilder} from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Router }            from '@angular/router';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'editschool',
  template:`
  <div class="wrapper wrapper-content animated fadeInRight school-menu">
    <div class="row">
      <form [formGroup]="myForm" novalidate (ngSubmit)="save(myForm.value, myForm.valid)">
		 <input type="hidden" name="id" class="form-control" formControlName="id">
		<school-cm-form [formGroup]="myForm"> </school-cm-form>
           
        </form>
    </div>
</div>
  `
})
export class EditSchoolComponent implements OnInit {
  //title = 'app works!';
  school:School;
  myForm: FormGroup;
  constructor(private fb: FormBuilder,
   private route: ActivatedRoute,
    private location: Location,
	private schoolService:SchoolService,
	private router: Router) { }
  ngOnInit():void {
   this.myForm = this.fb.group({
	 id:[''],
     name:['a'],
	 domainName:['b'],
	 address1:['c'],
	 address2:['d'],
	 city:['e'],
	 state:['f'],
	 pincode:['g'],
	 email:['h'],
	 phone1:['i'],
	 phone2:['j'],
	 fax:['k']
    });
   this.route.paramMap
      .switchMap((params: ParamMap) => this.schoolService.getSchool(+params.get('id')))
      .subscribe(school => {this.school = school;
		(<FormGroup>this.myForm)
            .setValue(this.school, { onlySelf: true });
			});


  }

  save(model: School):void {
        //this.submitted = true;
		debugger;
        console.log(model);

		this.schoolService.update(model)
      .then(() => {
        console.log("updated" + model);
		this.goToSchoolList();
      });
    }

	goToSchoolList():void {
		this.router.navigate(['/schoollist']);
	}
  cancel():void {
		this.goToSchoolList();
	}

}
