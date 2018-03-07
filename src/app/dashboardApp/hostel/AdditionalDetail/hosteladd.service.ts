import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Headers, Http } from '@angular/http';
import { Hosteladd } from './hosteladd';

@Injectable()
export class HosteladdService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private hosteladdsUrl = 'api/hosteladds';  // URL to web api
  constructor(private http: Http) { }

  hosteladds: Hosteladd[];
  getHosteladds(): Promise<Hosteladd[]> {
    return this.http.get(this.hosteladdsUrl)
      .toPromise()
      .then(response => response.json().data as Hosteladd[])
      .catch(this.handleError);
  }
  create(hosteladd: Hosteladd): Promise<Hosteladd> {
    return this.http
      .post(this.hosteladdsUrl, JSON.stringify(hosteladd), {headers: this.headers})
      .toPromise().then(res => res.json().data as Hosteladd)
      .catch(this.handleError);
  }

  getHosteladd(id: number): Promise<Hosteladd> {
    debugger;
    const url = `${this.hosteladdsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Hosteladd)
      .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
