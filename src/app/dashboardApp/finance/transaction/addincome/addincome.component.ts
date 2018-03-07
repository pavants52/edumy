import { Component,OnInit} from '@angular/core';
import { IncomeService } from './income.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Router }            from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Income } from "./income";

@Component({
  selector: 'addincome',
  templateUrl: './addincome.component.html'
})
export class AddIncomeComponent {
  income:Income = new Income();

  incomes:Income[];


  constructor( private route: ActivatedRoute,
               private location: Location,
               private incomeService:IncomeService,
               private router: Router){ }

  ngOnInit():void {
    //get the list of student setting and populate the array
    this.getIncomes();
  }
  getIncomes(): void {
    this.incomeService.getIncomes().then(values => this.incomes = values)
  }

  save():void {
    debugger;
    console.log("income" +this.income);
    if(!this.income.id ){
      this.incomeService.create(this.income)
        .then(res => {
          console.log("created" + res);
          this.incomes.push(res);
          this.income = new Income();

        });
    } else  {
      this.incomeService.update(this.income)
        .then(res => {
          console.log("created" + res);

          this.getIncomes();
          this.income = new Income();

        });
    }
  }
  update(id:number) {
    this.incomeService.getIncome(id)
      .then(res => {
        this.income = res;
      })
  }

  delete(id:number):void {
    this.incomeService.delete(id)
      .then(() => {
        console.log("deleted" + id);
        this.getIncomes();
        this.income = new Income();
      })
  }

  cancel():void {
    this.goToIncomes();
  }
  goToIncomes():void {
    this.router.navigate(['/addincome']);
  }

}
