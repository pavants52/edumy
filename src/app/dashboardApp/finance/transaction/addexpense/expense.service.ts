import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Headers, Http } from '@angular/http';
import { Expense } from './expense';

@Injectable()
export class ExpenseService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private expensesUrl = 'api/expenses';  // URL to web api
  constructor(private http: Http) { }
  expenses: Expense[];
  getExpenses(): Promise<Expense[]> {
    return this.http.get(this.expensesUrl)
      .toPromise()
      .then(response => response.json().data as Expense[])
      .catch(this.handleError);
  }
  create(expense: Expense): Promise<Expense> {
    return this.http
      .post(this.expensesUrl, JSON.stringify(expense), {headers: this.headers})
      .toPromise().then(res => res.json().data as Expense)
      .catch(this.handleError);
  }
  getExpense(id: number): Promise<Expense> {
    debugger;
    const url = `${this.expensesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Expense)
      .catch(this.handleError);
  }
  update(expense: Expense): Promise<Expense> {
    const url = `${this.expensesUrl}/${expense.id}`;
    return this.http
      .put(url, JSON.stringify(expense), {headers: this.headers})
      .toPromise()
      .then(() => expense)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.expensesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
