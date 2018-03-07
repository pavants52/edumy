import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Headers, Http } from '@angular/http';
import { Income } from './income';

@Injectable()
export class IncomeService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private incomesUrl = 'api/incomes';  // URL to web api
  constructor(private http: Http) { }
  incomes: Income[];
  getIncomes(): Promise<Income[]> {
    return this.http.get(this.incomesUrl)
      .toPromise()
      .then(response => response.json().data as Income[])
      .catch(this.handleError);
  }
  create(income: Income): Promise<Income> {
    return this.http
      .post(this.incomesUrl, JSON.stringify(income), {headers: this.headers})
      .toPromise().then(res => res.json().data as Income)
      .catch(this.handleError);
  }
  getIncome(id: number): Promise<Income> {
    debugger;
    const url = `${this.incomesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Income)
      .catch(this.handleError);
  }
  update(income: Income): Promise<Income> {
    const url = `${this.incomesUrl}/${income.id}`;
    return this.http
      .put(url, JSON.stringify(income), {headers: this.headers})
      .toPromise()
      .then(() => income)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.incomesUrl}/${id}`;
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
