import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Headers, Http } from '@angular/http';
import { Setgrading } from './setgrading';

@Injectable()
export class SetgradingService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private setgradingsUrl = 'api/setgradings';  // URL to web api
  constructor(private http: Http) { }

  setgradings: Setgrading[];
  getSetgradings(): Promise<Setgrading[]> {
    return this.http.get(this.setgradingsUrl)
      .toPromise()
      .then(response => response.json().data as Setgrading[])
      .catch(this.handleError);
  }
  create(setgrading: Setgrading): Promise<Setgrading> {
    return this.http
      .post(this.setgradingsUrl, JSON.stringify(setgrading), {headers: this.headers})
      .toPromise().then(res => res.json().data as Setgrading)
      .catch(this.handleError);
  }

  getSetgrading(id: number): Promise<Setgrading> {
    debugger;
    const url = `${this.setgradingsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Setgrading)
      .catch(this.handleError);
  }
  update(setgrading: Setgrading): Promise<Setgrading> {
    const url = `${this.setgradingsUrl}/${setgrading.id}`;
    return this.http
      .put(url, JSON.stringify(setgrading), {headers: this.headers})
      .toPromise()
      .then(() => setgrading)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.setgradingsUrl}/${id}`;
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
