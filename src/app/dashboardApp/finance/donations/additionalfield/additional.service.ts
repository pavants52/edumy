import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Headers, Http } from '@angular/http';
import { Additional } from './additional';

@Injectable()
export class AdditionalService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private additionalsUrl = 'api/additionals';  // URL to web api
  constructor(private http: Http) { }
  additionals: Additional[];
  getAdditionals(): Promise<Additional[]> {
    return this.http.get(this.additionalsUrl)
      .toPromise()
      .then(response => response.json().data as Additional[])
      .catch(this.handleError);
  }
  create(additional: Additional): Promise<Additional> {
    return this.http
      .post(this.additionalsUrl, JSON.stringify(additional), {headers: this.headers})
      .toPromise().then(res => res.json().data as Additional)
      .catch(this.handleError);
  }
  getAdditional(id: number): Promise<Additional> {
    debugger;
    const url = `${this.additionalsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Additional)
      .catch(this.handleError);
  }
  update(additional: Additional): Promise<Additional> {
    const url = `${this.additionalsUrl}/${additional.id}`;
    return this.http
      .put(url, JSON.stringify(additional), {headers: this.headers})
      .toPromise()
      .then(() => additional)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.additionalsUrl}/${id}`;
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
