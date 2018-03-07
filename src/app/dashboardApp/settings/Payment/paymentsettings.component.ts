import {Component, OnInit, Input} from '@angular/core';
import { Payment } from './payment';
import { PaymentService } from './payment.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Router }            from '@angular/router';
import 'rxjs/add/operator/switchMap';

export class Gateway {
  id:number;
  name:string;
}

const GATEWAYS: Gateway[] = [
  { id:1, name: "Pay U Money" },
  { id:2, name: "Pay U INDIA" },
  { id:3, name: "CC Avenue" }

];

@Component({
  selector: 'paymentsettings',
  templateUrl: './paymentsettings.component.html'

})
export class PaymentSettingsComponent implements OnInit{
  //title = 'app works!';
  payment:Payment=new Payment;
  constructor( private route: ActivatedRoute,
               private location: Location,
               private paymentService:PaymentService,
               private router: Router){ }


  gateways = GATEWAYS;
  selectedGateway: Gateway;

  email:string ="abc@test.com";

  onSelect(gateway:Gateway): void {
    this.selectedGateway = gateway;
  }
  toggleButton: boolean = false;


  ngOnInit():void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.paymentService.getPayment(+params.get('id')))
      .subscribe(payment => {this.payment = payment;});
  }

}
