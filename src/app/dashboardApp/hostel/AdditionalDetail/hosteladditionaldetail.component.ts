import { Component,Input } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import { Hosteladd } from './hosteladd';
import { HosteladdService } from './hosteladd.service';
import { Router }   from '@angular/router';

@Component({
  selector: 'hosteladditionaldetail',
  templateUrl: './hosteladditionaldetail.component.html'
})
export class HostelAdditionalDetailComponent {
  myForm: FormGroup;
  submitted: boolean;
  events: any[] = [];
  constructor(private fb: FormBuilder,private hosteladdService: HosteladdService,private router: Router) { }
  ngOnInit():void {
    this.myForm = this.fb.group({
      name:[''],
      status:[''],
      check:[''],
      select:[''],
    });

  }

  save(model: Hosteladd, isValid: boolean) {
    debugger;
    this.submitted = true;
    console.log(model, isValid);
  }

  cancel():void {
    this.goToHosteladdList();
  }
  goToHosteladdList():void {
    this.router.navigate(['/hosteladdlist']);
  }
}
