import { Component,Input } from '@angular/core';
import {FormGroup} from '@angular/forms';
import { Hostel } from './hostel';
import { Router }  from '@angular/router';
import { HostelService } from "./hostel.service";

@Component({
  selector: 'hostel-cm-form',
  templateUrl: './hostel-cm-form.component.html'
})
export class HostelCmFormComponent {
  @Input() hostel:Hostel;
  constructor(private router: Router,private hostelService: HostelService) { }

  saveHostel():void {
    debugger;
    console.log("hostel" + this.hostel);
    if(!this.hostel.id) {
      this.hostelService.create(this.hostel)
        .then(res => {
          console.log("created" + res);
          this.goToHostelList();
          this.hostel = res;

        });

    } else {
      this.hostelService.update(this.hostel)
        .then(() => {
          console.log("updated" + this.hostel);
          this.goToHostelList();
        })
    }

  }
  cancel():void {
    this.goToHostelList();
  }
  goToHostelList():void {
    this.router.navigate(['/hostellist']);
  }
}
