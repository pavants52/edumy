import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Headers, Http } from '@angular/http';
import { Fee } from './fee';


@Injectable()
export class FeeService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private feesUrl = 'api/fees';  // URL to web api
  //private schoolsUrl =  RequestApi.GET_SCHOOLS;  // URL to web api
  constructor(private http: Http) { }
  fees: Fee[];
  getFees(): Promise<Fee[]> {
    return this.http.get(this.feesUrl)
      .toPromise()
      .then(response => response.json().data as Fee[])
      .catch(this.handleError);
  }
  create(fee: Fee): Promise<Fee> {
    return this.http
      .post(this.feesUrl, JSON.stringify(fee), {headers: this.headers})
      .toPromise().then(res => res.json().data as Fee)
      .catch(this.handleError);
  }

  getFee(id: number): Promise<Fee> {
    debugger;
    const url = `${this.feesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Fee)
      .catch(this.handleError);
  }

  update(fee: Fee): Promise<Fee> {
    const url = `${this.feesUrl}/${fee.id}`;
    return this.http
      .put(url, JSON.stringify(fee), {headers: this.headers})
      .toPromise()
      .then(() => fee)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.feesUrl}/${id}`;
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
