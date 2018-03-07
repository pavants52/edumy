import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Headers, Http } from '@angular/http';
import { Particular } from './particular';

@Injectable()
export class ParticularService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private particularsUrl = 'api/particulars';  // URL to web api
  constructor(private http: Http) { }
  particulars: Particular[];
  getParticulars(): Promise<Particular[]> {
    return this.http.get(this.particularsUrl)
      .toPromise()
      .then(response => response.json().data as Particular[])
      .catch(this.handleError);
  }
  create(particular: Particular): Promise<Particular> {
    return this.http
      .post(this.particularsUrl, JSON.stringify(particular), {headers: this.headers})
      .toPromise().then(res => res.json().data as Particular)
      .catch(this.handleError);
  }
  getParticular(id: number): Promise<Particular> {
    debugger;
    const url = `${this.particularsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Particular)
      .catch(this.handleError);
  }
  update(particular: Particular): Promise<Particular> {
    const url = `${this.particularsUrl}/${particular.id}`;
    return this.http
      .put(url, JSON.stringify(particular), {headers: this.headers})
      .toPromise()
      .then(() => particular)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.particularsUrl}/${id}`;
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
