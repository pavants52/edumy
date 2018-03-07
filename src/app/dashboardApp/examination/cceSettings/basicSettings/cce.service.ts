import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Headers, Http } from '@angular/http';
import { Cce } from './cce';

@Injectable()
export class CceService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private ccesUrl = 'api/cces';  // URL to web api
  constructor(private http: Http) { }
  cces: Cce[];
  getCces(): Promise<Cce[]> {
    return this.http.get(this.ccesUrl)
      .toPromise()
      .then(response => response.json().data as Cce[])
      .catch(this.handleError);
  }
  create(cce: Cce): Promise<Cce> {
    return this.http
      .post(this.ccesUrl, JSON.stringify(cce), {headers: this.headers})
      .toPromise().then(res => res.json().data as Cce)
      .catch(this.handleError);
  }
  getCce(id: number): Promise<Cce> {
    debugger;
    const url = `${this.ccesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Cce)
      .catch(this.handleError);
  }
  update(cce: Cce): Promise<Cce> {
    const url = `${this.ccesUrl}/${cce.id}`;
    return this.http
      .put(url, JSON.stringify(cce), {headers: this.headers})
      .toPromise()
      .then(() => cce)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.ccesUrl}/${id}`;
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
