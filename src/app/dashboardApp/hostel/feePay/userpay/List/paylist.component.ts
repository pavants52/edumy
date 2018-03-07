import { Component } from '@angular/core';
import { SharedService } from '../../../../../utilityApp/services/shared.service';
import {Batchpay} from "../../batchpay/batchpay";
import {BatchpayService} from "../../batchpay/batchpay.service";

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
  selector: 'paylist',
  templateUrl: './paylist.component.html'
})
export class PayListComponent {
  //title = 'app works!';

  fees = FEES;
  selectedFee:Fee;

  onSelect(fee:Fee):void {
    this.selectedFee = fee;
  }

  toggleButton:boolean = false;

  batchpays:Batchpay[];
  constructor(private batchpayService: BatchpayService) { }

  ngOnInit():void {
    this.getBatchpays();
  }
  getBatchpays(): void {
    this.batchpayService.getBatchpays().then(values => this.batchpays = values)
  }
}
