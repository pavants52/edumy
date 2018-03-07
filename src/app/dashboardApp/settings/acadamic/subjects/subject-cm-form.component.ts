import { Component,Input } from '@angular/core';
import {FormGroup} from '@angular/forms';
import { Subject } from './subject';
import { Router }            from '@angular/router';

@Component({
  selector: 'subject-cm-form',
  templateUrl: './subject-cm-form.component.html'
})
export class SubjectCmFormComponent {
  @Input() formGroup: FormGroup;
  constructor(private router: Router) { }
  cancel():void {
    this.goToSubject();
  }
  goToSubject():void {
    this.router.navigate(['/subjects']);
  }
}
