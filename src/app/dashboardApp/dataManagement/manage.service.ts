import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Headers, Http } from '@angular/http';
import { Manage } from './manage';

@Injectable()
export class ManageService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private managesUrl = 'api/manages';  // URL to web api
  constructor(private http: Http) { }
  manages: Manage[];
  getManages(): Promise<Manage[]> {
    return this.http.get(this.managesUrl)
      .toPromise()
      .then(response => response.json().data as Manage[])
      .catch(this.handleError);
  }
  create(manage: Manage): Promise<Manage> {
    return this.http
      .post(this.managesUrl, JSON.stringify(manage), {headers: this.headers})
      .toPromise().then(res => res.json().data as Manage)
      .catch(this.handleError);
  }
  getManage(id: number): Promise<Manage> {
    debugger;
    const url = `${this.managesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Manage)
      .catch(this.handleError);
  }
  update(manage: Manage): Promise<Manage> {
    const url = `${this.managesUrl}/${manage.id}`;
    return this.http
      .put(url, JSON.stringify(manage), {headers: this.headers})
      .toPromise()
      .then(() => manage)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.managesUrl}/${id}`;
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
