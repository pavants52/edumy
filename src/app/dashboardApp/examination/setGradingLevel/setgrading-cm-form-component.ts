import { Component,Input } from '@angular/core';
import {FormGroup} from '@angular/forms';
import { Setgrading } from './setgrading';
import { SetgradingService } from './setgrading.service';
import { Router }   from '@angular/router';

@Component({
  selector: 'setgrading-cm-form',
  templateUrl: './setgrading-cm-form.component.html'
})
export class SetGradingCmFormComponent {
  @Input() setgrading:Setgrading;
  constructor(private router: Router,private setgradingService: SetgradingService) { }

  saveSetgrading():void {
    debugger;
    console.log("setgrading" + this.setgrading);
    if(!this.setgrading.id) {
      this.setgradingService.create(this.setgrading)
        .then(res => {
          console.log("created" + res);
          this.goToSetgradingList();
          this.setgrading = res;

        });

    } else {
      this.setgradingService.update(this.setgrading)
        .then(() => {
          console.log("updated" + this.setgrading);
          this.goToSetgradingList();
        })
    }

  }
  cancel():void {
    this.goToSetgradingList();
  }
  goToSetgradingList():void {
    this.router.navigate(['/setgradinglist']);
  }
}
