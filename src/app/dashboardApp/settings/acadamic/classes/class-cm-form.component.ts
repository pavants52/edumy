import { Component,Input } from '@angular/core';
import {FormGroup} from '@angular/forms';
import { ClassModel } from './classmodel';
import { Router }            from '@angular/router';

@Component({
  selector: 'class-cm-form',
  templateUrl: './class-cm-form.component.html'
})
export class ClassCmFormComponent {
  @Input() formGroup: FormGroup;
  constructor(private router: Router) { }
  cancel():void {
    this.goToClass();
  }
  goToClass():void {
    this.router.navigate(['/classes']);
  }

}
