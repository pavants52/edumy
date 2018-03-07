import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Headers, Http } from '@angular/http';
import { Purchase } from './purchase';

@Injectable()
export class PurchaseService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private purchasesUrl = 'api/purchases';  // URL to web api
  constructor(private http: Http) { }
  purchases: Purchase[];
  getPurchases(): Promise<Purchase[]> {
    return this.http.get(this.purchasesUrl)
      .toPromise()
      .then(response => response.json().data as Purchase[])
      .catch(this.handleError);
  }
  create(purchase: Purchase): Promise<Purchase> {
    return this.http
      .post(this.purchasesUrl, JSON.stringify(purchase), {headers: this.headers})
      .toPromise().then(res => res.json().data as Purchase)
      .catch(this.handleError);
  }
  getPurchase(id: number): Promise<Purchase> {
    debugger;
    const url = `${this.purchasesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Purchase)
      .catch(this.handleError);
  }
  update(purchase: Purchase): Promise<Purchase> {
    const url = `${this.purchasesUrl}/${purchase.id}`;
    return this.http
      .put(url, JSON.stringify(purchase), {headers: this.headers})
      .toPromise()
      .then(() => purchase)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.purchasesUrl}/${id}`;
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
