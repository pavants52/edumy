import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Headers, Http } from '@angular/http';
import { Icse } from './icse';

@Injectable()
export class IcseService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private icsesUrl = 'api/icses';  // URL to web api
  constructor(private http: Http) { }
  icses: Icse[];
  getIcses(): Promise<Icse[]> {
    return this.http.get(this.icsesUrl)
      .toPromise()
      .then(response => response.json().data as Icse[])
      .catch(this.handleError);
  }
  create(icse: Icse): Promise<Icse> {
    return this.http
      .post(this.icsesUrl, JSON.stringify(icse), {headers: this.headers})
      .toPromise().then(res => res.json().data as Icse)
      .catch(this.handleError);
  }
  getIcse(id: number): Promise<Icse> {
    debugger;
    const url = `${this.icsesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Icse)
      .catch(this.handleError);
  }
  update(icse: Icse): Promise<Icse> {
    const url = `${this.icsesUrl}/${icse.id}`;
    return this.http
      .put(url, JSON.stringify(icse), {headers: this.headers})
      .toPromise()
      .then(() => icse)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.icsesUrl}/${id}`;
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
