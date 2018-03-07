import { Component,Input } from '@angular/core';
import {FormGroup} from '@angular/forms';
import { School } from './school';
import { Router }            from '@angular/router';

@Component({
  selector: 'school-cm-form',
  templateUrl: './school-cm-form.component.html'
})
export class SchoolCmFormComponent {
   @Input() formGroup: FormGroup;
   constructor(private router: Router) { }
	cancel():void {
		this.goToSchoolList();
	}
	goToSchoolList():void {
		this.router.navigate(['/schoollist']);
	}
}