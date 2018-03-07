import { Component,OnInit} from '@angular/core';
import { SharedService } from '../../../utilityApp/services/shared.service';
import { School } from '../school';
import {ReactiveFormsModule, FormGroup, FormBuilder} from '@angular/forms';
import { Router }            from '@angular/router';
import { SchoolService } from '../school.service';

@Component({
  selector: 'addschool',
  template:`
  <div class="wrapper wrapper-content animated fadeInRight school-menu">
    <div class="row">
      <form [formGroup]="myForm" novalidate (ngSubmit)="save(myForm.value, myForm.valid)">
		
		<school-cm-form [formGroup]="myForm"> </school-cm-form>
           
        </form>
    </div>
</div>

  `
})
export class AddSchoolComponent implements OnInit {
  //title = 'app works!';
  myForm: FormGroup;
  constructor(private fb: FormBuilder,private schoolService: SchoolService,private router: Router) { }
  ngOnInit():void {
    this.myForm = this.fb.group({
     name:[''],
	 domainName:[''],
	 address1:[''],
	 address2:[''],
	 city:[''],
	 state:[''],
	 pincode:[''],
	 email:[''],
	 phone1:[''],
	 phone2:[''],
	 fax:['']
    });

  }


  save(model: School):void {
        //this.submitted = true;
		debugger;
        console.log(model);

		this.schoolService.create(model)
      .then(school => {
        console.log("created" + school);
		this.goToSchoolList();
      });
    }
	cancel():void {
		this.goToSchoolList();
	}
	goToSchoolList():void {
		this.router.navigate(['/schoollist']);
	}
}
