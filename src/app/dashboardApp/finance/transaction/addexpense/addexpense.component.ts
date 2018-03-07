import { Component,OnInit} from '@angular/core';
import { ExpenseService } from './expense.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Router }            from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Expense } from "./expense";

@Component({
  selector: 'addexpense',
  templateUrl: './addexpense.component.html'
})
export class AddExpenseComponent {
  expense:Expense = new Expense();

  expenses:Expense[];


  constructor( private route: ActivatedRoute,
               private location: Location,
               private expenseService:ExpenseService,
               private router: Router){ }

  ngOnInit():void {
    //get the list of student setting and populate the array
    this.getExpenses();
  }
  getExpenses(): void {
    this.expenseService.getExpenses().then(values => this.expenses = values)
  }

  save():void {
    debugger;
    console.log("expense" +this.expense);
    if(!this.expense.id ){
      this.expenseService.create(this.expense)
        .then(res => {
          console.log("created" + res);
          this.expenses.push(res);
          this.expense = new Expense();

        });
    } else  {
      this.expenseService.update(this.expense)
        .then(res => {
          console.log("created" + res);

          this.getExpenses();
          this.expense = new Expense();

        });
    }
  }
  update(id:number) {
    this.expenseService.getExpense(id)
      .then(res => {
        this.expense = res;
      })
  }

  delete(id:number):void {
    this.expenseService.delete(id)
      .then(() => {
        console.log("deleted" + id);
        this.getExpenses();
        this.expense = new Expense();
      })
  }

  cancel():void {
    this.goToExpenses();
  }
  goToExpenses():void {
    this.router.navigate(['/addexpense']);
  }

}
