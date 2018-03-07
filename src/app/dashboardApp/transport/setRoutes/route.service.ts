import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Headers, Http } from '@angular/http';
import { Setroute } from './setroute';


@Injectable()
export class RouteService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private setroutesUrl = 'api/setroutes';  // URL to web api
  //private schoolsUrl =  RequestApi.GET_SCHOOLS;  // URL to web api
  constructor(private http: Http) { }
  setroutes: Setroute[];
  getSetroutes(): Promise<Setroute[]> {
    return this.http.get(this.setroutesUrl)
      .toPromise()
      .then(response => response.json().data as Setroute[])
      .catch(this.handleError);
  }
  create(setroute: Setroute): Promise<Setroute> {
    return this.http
      .post(this.setroutesUrl, JSON.stringify(setroute), {headers: this.headers})
      .toPromise().then(res => res.json().data as Setroute)
      .catch(this.handleError);
  }

  getSetroute(id: number): Promise<Setroute> {
    debugger;
    const url = `${this.setroutesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Setroute)
      .catch(this.handleError);
  }

  update(setroute: Setroute): Promise<Setroute> {
    const url = `${this.setroutesUrl}/${setroute.id}`;
    return this.http
      .put(url, JSON.stringify(setroute), {headers: this.headers})
      .toPromise()
      .then(() => setroute)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.setroutesUrl}/${id}`;
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
