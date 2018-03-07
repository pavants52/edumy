import { Component,Input } from '@angular/core';
import {FormGroup} from '@angular/forms';
import { Setroute } from './setroute';
import { Router }            from '@angular/router';

@Component({
  selector: 'setroute-cm-form',
  templateUrl: './setroute-cm-form.component.html'
})
export class SetRouteCmFormComponent {
  @Input() formGroup: FormGroup;
  constructor(private router: Router) { }
  cancel():void {
    this.goToSetRouteList();
  }
  goToSetRouteList():void {
    this.router.navigate(['/setroutelist']);
  }
}
