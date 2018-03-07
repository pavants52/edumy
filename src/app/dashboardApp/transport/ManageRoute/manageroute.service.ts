import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Headers, Http } from '@angular/http';
import { Manageroute } from './manageroute';

@Injectable()
export class ManagerouteService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private manageroutesUrl = 'api/manageroutes';  // URL to web api
  constructor(private http: Http) { }
  manageroutes: Manageroute[];
  getManageroutes(): Promise<Manageroute[]> {
    return this.http.get(this.manageroutesUrl)
      .toPromise()
      .then(response => response.json().data as Manageroute[])
      .catch(this.handleError);
  }
  create(manageroute: Manageroute): Promise<Manageroute> {
    return this.http
      .post(this.manageroutesUrl, JSON.stringify(manageroute), {headers: this.headers})
      .toPromise().then(res => res.json().data as Manageroute)
      .catch(this.handleError);
  }
  getManageroute(id: number): Promise<Manageroute> {
    debugger;
    const url = `${this.manageroutesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Manageroute)
      .catch(this.handleError);
  }
  update(manageroute: Manageroute): Promise<Manageroute> {
    const url = `${this.manageroutesUrl}/${manageroute.id}`;
    return this.http
      .put(url, JSON.stringify(manageroute), {headers: this.headers})
      .toPromise()
      .then(() => manageroute)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.manageroutesUrl}/${id}`;
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
