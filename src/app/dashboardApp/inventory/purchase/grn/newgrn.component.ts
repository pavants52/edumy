import { Component,OnInit} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Router }            from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {Purchase} from "../new/purchase";
import {PurchaseService} from "../new/purchase.service";


@Component({
  selector: 'newgrn',
  templateUrl: './newgrn.component.html'
})
export class NewGrnComponent {

  purchase:Purchase = new Purchase();

  purchases:Purchase[];


  constructor( private route: ActivatedRoute,
               private location: Location,
               private purchaseService:PurchaseService,
               private router: Router){ }

  ngOnInit():void {
    //get the list of student setting and populate the array
    this.getPurchases();
  }
  getPurchases(): void {
    this.purchaseService.getPurchases().then(values => this.purchases = values)
  }

  save():void {
    debugger;
    console.log("purchase" +this.purchase);
    if(!this.purchase.id ){
      this.purchaseService.create(this.purchase)
        .then(res => {
          console.log("created" + res);
          this.purchases.push(res);
          this.purchase = new Purchase();

        });
    } else  {
      this.purchaseService.update(this.purchase)
        .then(res => {
          console.log("created" + res);

          this.getPurchases();
          this.purchase = new Purchase();

        });
    }
  }
  update(id:number) {
    this.purchaseService.getPurchase(id)
      .then(res => {
        this.purchase = res;
      })
  }

  delete(id:number):void {
    this.purchaseService.delete(id)
      .then(() => {
        console.log("deleted" + id);
        this.getPurchases();
        this.purchase = new Purchase();
      })
  }

  cancel():void {
    this.goToPurchases();
  }
  goToPurchases():void {
    this.router.navigate(['/newgrn']);
  }

}
