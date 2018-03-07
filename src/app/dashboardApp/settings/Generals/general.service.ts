import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Headers, Http } from '@angular/http';
import { General } from './general';

@Injectable()
export class GeneralService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private generalsUrl = 'api/generals';  // URL to web api
  constructor(private http: Http) { }
  generals: General[];
  getGenerals(): Promise<General[]> {
    return this.http.get(this.generalsUrl)
      .toPromise()
      .then(response => response.json().data as General[])
      .catch(this.handleError);
  }
  create(general: General): Promise<General> {
    return this.http
      .post(this.generalsUrl, JSON.stringify(general), {headers: this.headers})
      .toPromise().then(res => res.json().data as General)
      .catch(this.handleError);
  }

  getGeneral(id: number): Promise<General> {
    debugger;
    const url = `${this.generalsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as General)
      .catch(this.handleError);
  }



  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
