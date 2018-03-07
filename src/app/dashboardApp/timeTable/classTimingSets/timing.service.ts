import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Headers, Http } from '@angular/http';
import { Timing } from './timing';

@Injectable()
export class TimingService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private timingsUrl = 'api/timings';  // URL to web api
  constructor(private http: Http) { }

  timings: Timing[];
  getTimings(): Promise<Timing[]> {
    return this.http.get(this.timingsUrl)
      .toPromise()
      .then(response => response.json().data as Timing[])
      .catch(this.handleError);
  }
  create(timing: Timing): Promise<Timing> {
    return this.http
      .post(this.timingsUrl, JSON.stringify(timing), {headers: this.headers})
      .toPromise().then(res => res.json().data as Timing)
      .catch(this.handleError);
  }

  getTiming(id: number): Promise<Timing> {
    debugger;
    const url = `${this.timingsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Timing)
      .catch(this.handleError);
  }
  update(timing: Timing): Promise<Timing> {
    const url = `${this.timingsUrl}/${timing.id}`;
    return this.http
      .put(url, JSON.stringify(timing), {headers: this.headers})
      .toPromise()
      .then(() => timing)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.timingsUrl}/${id}`;
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
