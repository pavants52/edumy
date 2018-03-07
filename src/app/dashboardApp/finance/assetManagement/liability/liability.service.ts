import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Headers, Http } from '@angular/http';
import { Liability } from './liability';

@Injectable()
export class LiabilityService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private liabilitysUrl = 'api/liabilitys';  // URL to web api
  constructor(private http: Http) { }
  liabilitys: Liability[];
  getLiabilitys(): Promise<Liability[]> {
    return this.http.get(this.liabilitysUrl)
      .toPromise()
      .then(response => response.json().data as Liability[])
      .catch(this.handleError);
  }
  create(liability: Liability): Promise<Liability> {
    return this.http
      .post(this.liabilitysUrl, JSON.stringify(liability), {headers: this.headers})
      .toPromise().then(res => res.json().data as Liability)
      .catch(this.handleError);
  }
  getLiability(id: number): Promise<Liability> {
    debugger;
    const url = `${this.liabilitysUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Liability)
      .catch(this.handleError);
  }
  update(liability: Liability): Promise<Liability> {
    const url = `${this.liabilitysUrl}/${liability.id}`;
    return this.http
      .put(url, JSON.stringify(liability), {headers: this.headers})
      .toPromise()
      .then(() => liability)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.liabilitysUrl}/${id}`;
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
