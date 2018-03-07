import { Component,OnInit} from '@angular/core';
import { SharedService } from '../../../utilityApp/services/shared.service';
import { General } from './general';
import {ReactiveFormsModule, FormGroup, FormBuilder} from '@angular/forms';
import { Router }            from '@angular/router';
import { GeneralService } from './general.service';

@Component({
  selector: 'general-cm-form',
  templateUrl: './general-cm-form.component.html'

})
export class GeneralCmFormComponent {
  myForm: FormGroup;
    submitted: boolean;
    events: any[] = [];
    constructor(private fb: FormBuilder,private generalService: GeneralService,private router: Router) { }
    ngOnInit():void {
      this.myForm = this.fb.group({
      collegeName:[''],
      addline1:[''],
      addline2:[''],
      city:[''],
      state:[''],
      zip:[''],
    country:[''],
    institution:[''],
    attendance:[''],
    week:[''],
    dateFormat:[''],
    dateSeparator:[''],
    financeStart:[''],
    financeEnd:[''],
    receipt:[''],
    language:[''],
    timezone:[''],
    currency:[''],
    precision:[''],
    upload:[''],
    grade:[''],
    moodle:[''],
    theme:[''],
    font:[''],
    incrementAdmission:[''],
    incrementEmployee:[''],
    comment:[''],
    sibling:[''],
    passwordChange:[''],
    rollNo:[''],
    });

  }

  save(model: General, isValid: boolean) {
    debugger;
    this.submitted = true;
    console.log(model, isValid);
  }

  cancel():void {
    this.goToGeneralList();
  }
  goToGeneralList():void {
    this.router.navigate(['/generallist']);
  }
}
