import { Component,OnInit} from '@angular/core';
import { DiscountService } from './discount.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Router }            from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Discount } from "./discount";


@Component({
  selector: 'creatediscount',
  templateUrl: './creatediscount.component.html'
})
export class CreateDiscountComponent {

  discount:Discount = new Discount();

  discounts:Discount[];


  constructor( private route: ActivatedRoute,
               private location: Location,
               private discountService:DiscountService,
               private router: Router){ }

  ngOnInit():void {
    //get the list of student setting and populate the array
    this.getDiscounts();
  }
  getDiscounts(): void {
    this.discountService.getDiscounts().then(values => this.discounts = values)
  }

  save():void {
    debugger;
    console.log("discount" +this.discount);
    if(!this.discount.id ){
      this.discountService.create(this.discount)
        .then(res => {
          console.log("created" + res);
          this.discounts.push(res);
          this.discount = new Discount();

        });
    } else  {
      this.discountService.update(this.discount)
        .then(res => {
          console.log("created" + res);

          this.getDiscounts();
          this.discount = new Discount();

        });
    }
  }
  update(id:number) {
    this.discountService.getDiscount(id)
      .then(res => {
        this.discount = res;
      })
  }

  delete(id:number):void {
    this.discountService.delete(id)
      .then(() => {
        console.log("deleted" + id);
        this.getDiscounts();
        this.discount = new Discount();
      })
  }

  cancel():void {
    this.goToDiscounts();
  }
  goToDiscounts():void {
    this.router.navigate(['/creatediscount']);
  }

}
