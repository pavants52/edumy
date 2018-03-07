import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Headers, Http } from '@angular/http';
import { Online } from './online';

@Injectable()
export class OnlineService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private onlinesUrl = 'api/onlines';  // URL to web api
  constructor(private http: Http) { }
  onlines: Online[];
  getOnlines(): Promise<Online[]> {
    return this.http.get(this.onlinesUrl)
      .toPromise()
      .then(response => response.json().data as Online[])
      .catch(this.handleError);
  }
  create(online: Online): Promise<Online> {
    return this.http
      .post(this.onlinesUrl, JSON.stringify(online), {headers: this.headers})
      .toPromise().then(res => res.json().data as Online)
      .catch(this.handleError);
  }
  getOnline(id: number): Promise<Online> {
    debugger;
    const url = `${this.onlinesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Online)
      .catch(this.handleError);
  }
  update(online: Online): Promise<Online> {
    const url = `${this.onlinesUrl}/${online.id}`;
    return this.http
      .put(url, JSON.stringify(online), {headers: this.headers})
      .toPromise()
      .then(() => online)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.onlinesUrl}/${id}`;
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
