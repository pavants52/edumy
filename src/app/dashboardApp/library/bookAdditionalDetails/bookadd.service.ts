import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Headers, Http } from '@angular/http';
import { Bookadd } from './bookadd';

@Injectable()
export class BookaddService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private bookaddsUrl = 'api/bookadds';  // URL to web api
  constructor(private http: Http) { }
  bookadds: Bookadd[];
  getBookadds(): Promise<Bookadd[]> {
    return this.http.get(this.bookaddsUrl)
      .toPromise()
      .then(response => response.json().data as Bookadd[])
      .catch(this.handleError);
  }
  create(bookadd: Bookadd): Promise<Bookadd> {
    return this.http
      .post(this.bookaddsUrl, JSON.stringify(bookadd), {headers: this.headers})
      .toPromise().then(res => res.json().data as Bookadd)
      .catch(this.handleError);
  }
  getBookadd(id: number): Promise<Bookadd> {
    debugger;
    const url = `${this.bookaddsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Bookadd)
      .catch(this.handleError);
  }
  update(bookadd: Bookadd): Promise<Bookadd> {
    const url = `${this.bookaddsUrl}/${bookadd.id}`;
    return this.http
      .put(url, JSON.stringify(bookadd), {headers: this.headers})
      .toPromise()
      .then(() => bookadd)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.bookaddsUrl}/${id}`;
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
