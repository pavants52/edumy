import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';
import { Fee } from './fee';
import { Router }  from '@angular/router';
import {FeeService} from "./fee.service";

@Component({
  selector: 'transportfee-cm-form',
  templateUrl: './transportfee-cm-form.component.html'
})
export class TransportFeeCmFormComponent {
  @Input() fee:Fee;
  constructor(private router: Router,private feeService: FeeService) { }

  saveFee():void {
    debugger;
    console.log("fee" + this.fee);
    if(!this.fee.id) {
      this.feeService.create(this.fee)
        .then(res => {
          console.log("created" + res);
          this.goToFeeList();
          this.fee = res;

        });

    } else {
      this.feeService.update(this.fee)
        .then(() => {
          console.log("updated" + this.fee);
          this.goToFeeList();
        })
    }

  }
  cancel():void {
    this.goToFeeList();
  }
  goToFeeList():void {
    this.router.navigate(['/feelist']);
  }
}

