import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Headers, Http } from '@angular/http';
import { Batchfee } from './batchfee';

@Injectable()
export class BatchfeeService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private batchfeesUrl = 'api/batchfees';  // URL to web api
  constructor(private http: Http) { }
  batchfees: Batchfee[];
  getBatchfees(): Promise<Batchfee[]> {
    return this.http.get(this.batchfeesUrl)
      .toPromise()
      .then(response => response.json().data as Batchfee[])
      .catch(this.handleError);
  }
  create(batchfee: Batchfee): Promise<Batchfee> {
    return this.http
      .post(this.batchfeesUrl, JSON.stringify(batchfee), {headers: this.headers})
      .toPromise().then(res => res.json().data as Batchfee)
      .catch(this.handleError);
  }

  getBatchfee(id: number): Promise<Batchfee> {
    debugger;
    const url = `${this.batchfeesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Batchfee)
      .catch(this.handleError);
  }
  update(batchfee: Batchfee): Promise<Batchfee> {
    const url = `${this.batchfeesUrl}/${batchfee.id}`;
    return this.http
      .put(url, JSON.stringify(batchfee), {headers: this.headers})
      .toPromise()
      .then(() => batchfee)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.batchfeesUrl}/${id}`;
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
