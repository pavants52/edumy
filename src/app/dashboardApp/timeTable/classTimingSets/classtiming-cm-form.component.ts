import { Component,Input } from '@angular/core';
import {FormGroup} from '@angular/forms';
import { Timing } from './timing';
import { TimingService } from './timing.service';
import { Router }   from '@angular/router';

@Component({
  selector: 'classtiming-cm-form',
  templateUrl: './classtiming-cm-form.component.html'
})
export class ClassTimingCmFormComponent {

  @Input() timing:Timing;
  constructor(private router: Router,private timingService: TimingService) { }

  saveTiming():void {
    debugger;
    console.log("timing" + this.timing);
    if(!this.timing.id) {
      this.timingService.create(this.timing)
        .then(res => {
          console.log("created" + res);
          this.goToTimingList();
          this.timing = res;

        });

    } else {
      this.timingService.update(this.timing)
        .then(() => {
          console.log("updated" + this.timing);
          this.goToTimingList();
        })
    }

  }
  cancel():void {
    this.goToTimingList();
  }
  goToTimingList():void {
    this.router.navigate(['/timinglist']);
  }
}
