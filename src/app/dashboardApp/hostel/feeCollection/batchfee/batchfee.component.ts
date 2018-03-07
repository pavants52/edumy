import {Component, Input} from '@angular/core';
import { SharedService } from '../../../../utilityApp/services/shared.service';
import { Batchfee } from './batchfee';
import {ReactiveFormsModule, FormGroup, FormBuilder} from '@angular/forms';
import { Router }            from '@angular/router';
import { BatchfeeService } from './batchfee.service';

@Component({
  selector: 'batchfee',
  templateUrl: './batchfee.component.html'
})
export class BatchFeeComponent {
  @Input() batchfee:Batchfee;
  constructor(private router: Router,private batchfeeService: BatchfeeService) { }

  saveBatchfee():void {
    debugger;
    console.log("batchfee" + this.batchfee);
    if(!this.batchfee.id) {
      this.batchfeeService.create(this.batchfee)
        .then(res => {
          console.log("created" + res);
          this.goToView();
          this.batchfee = res;

        });

    } else {
      this.batchfeeService.update(this.batchfee)
        .then(() => {
          console.log("updated" + this.batchfee);
          this.goToView();
        })
    }

  }
  cancel():void {
    this.goToView();
  }
  goToView():void {
    this.router.navigate(['/hostelfeecollection/view']);
  }
}
