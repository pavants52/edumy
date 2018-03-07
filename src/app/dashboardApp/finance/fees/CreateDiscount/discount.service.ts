import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Headers, Http } from '@angular/http';
import { Discount } from './discount';

@Injectable()
export class DiscountService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private discountsUrl = 'api/discounts';  // URL to web api
  constructor(private http: Http) { }
  discounts: Discount[];
  getDiscounts(): Promise<Discount[]> {
    return this.http.get(this.discountsUrl)
      .toPromise()
      .then(response => response.json().data as Discount[])
      .catch(this.handleError);
  }
  create(discount: Discount): Promise<Discount> {
    return this.http
      .post(this.discountsUrl, JSON.stringify(discount), {headers: this.headers})
      .toPromise().then(res => res.json().data as Discount)
      .catch(this.handleError);
  }
  getDiscount(id: number): Promise<Discount> {
    debugger;
    const url = `${this.discountsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Discount)
      .catch(this.handleError);
  }
  update(discount: Discount): Promise<Discount> {
    const url = `${this.discountsUrl}/${discount.id}`;
    return this.http
      .put(url, JSON.stringify(discount), {headers: this.headers})
      .toPromise()
      .then(() => discount)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.discountsUrl}/${id}`;
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
