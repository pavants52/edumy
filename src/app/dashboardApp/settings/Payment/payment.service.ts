import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Headers, Http } from '@angular/http';
import { Payment } from './payment';

@Injectable()
export class PaymentService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private paymentsUrl = 'api/payments';  // URL to web api
  constructor(private http: Http) { }
  payments: Payment[];
  getPayments(): Promise<Payment[]> {
    return this.http.get(this.paymentsUrl)
      .toPromise()
      .then(response => response.json().data as Payment[])
      .catch(this.handleError);
  }
  create(payment: Payment): Promise<Payment> {
    return this.http
      .post(this.paymentsUrl, JSON.stringify(Payment), {headers: this.headers})
      .toPromise().then(res => res.json().data as Payment)
      .catch(this.handleError);

  }

  getPayment(id: number): Promise<Payment> {
    debugger;
    const url = `${this.paymentsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Payment)
      .catch(this.handleError);
  }
  update(payment: Payment): Promise<Payment> {
    const url = `${this.paymentsUrl}/${payment.id}`;
    return this.http
      .put(url, JSON.stringify(payment), {headers: this.headers})
      .toPromise()
      .then(() => payment)
      .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
