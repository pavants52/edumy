import {Component, Input} from '@angular/core';
import { SharedService } from '../../../../utilityApp/services/shared.service';
import { Batchpay } from './batchpay';
import { BatchpayService } from './batchpay.service';
import { Router }            from '@angular/router';


export class Fee {
  id:number;
  name:string;
  roll:string;
  amount:string;
}

const FEES: Fee[] = [
  { id:1, name: 'Test1' ,roll:'10001',amount:'1500'},
  { id:2, name: 'Test2' ,roll:'10002',amount:'2000'},
  { id:3, name: 'Test3' ,roll:'10003',amount:'2500'}

];

@Component({
  selector: 'batchpay',
  templateUrl: './batchpay.component.html'
})
export class BatchPayComponent {


  fees = FEES;
  selectedFee:Fee;

  onSelect(fee:Fee):void {
    this.selectedFee = fee;
  }
  toggleButton:boolean = false;

  @Input() batchpay:Batchpay =new Batchpay();
  constructor(private router: Router,private batchpayService: BatchpayService) { }

  saveBatchpay():void {
    debugger;
    console.log("batchpay" + this.batchpay);
    if(!this.batchpay.id) {
      this.batchpayService.create(this.batchpay)
        .then(res => {
          console.log("created" + res);
          this.goToPayList();
          this.batchpay = res;

        });

    } else {
      this.batchpayService.update(this.batchpay)
        .then(() => {
          console.log("updated" + this.batchpay);
          this.goToPayList();
        })
    }

  }
  cancel():void {
    this.goToPayList();
  }
  goToPayList():void {
    this.router.navigate(['/hostelfeepay/userpay']);
  }
}
