import { Component,Input } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import { Roomadd } from './roomadd';
import { RoomaddService } from './roomadd.service';
import { Router }   from '@angular/router';

@Component({
  selector: 'hostelroomadditionaldetail',
  templateUrl: './hostelroomadditionaldetail.component.html'
})
export class HostelRoomAdditionalDetailComponent {
  myForm: FormGroup;
  submitted: boolean;
  events: any[] = [];
  constructor(private fb: FormBuilder,private roomaddService: RoomaddService,private router: Router) { }
  ngOnInit():void {
    this.myForm = this.fb.group({
      name:[''],
      status:[''],
      check:[''],
      select:[''],

    });

  }

  save(model: Roomadd, isValid: boolean) {
    debugger;
    this.submitted = true;
    console.log(model, isValid);
  }


  cancel():void {
    this.goToRoomaddList();
  }
  goToRoomaddList():void {
    this.router.navigate(['/roomaddlist']);
  }
}
