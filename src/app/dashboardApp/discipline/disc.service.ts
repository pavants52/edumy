import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Headers, Http } from '@angular/http';
import { Disc } from './disc';

@Injectable()
export class DiscService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private discsUrl = 'api/discs';  // URL to web api
  constructor(private http: Http) { }
  discs: Disc[];
  getDiscs(): Promise<Disc[]> {
    return this.http.get(this.discsUrl)
      .toPromise()
      .then(response => response.json().data as Disc[])
      .catch(this.handleError);
  }
  create(disc: Disc): Promise<Disc> {
    return this.http
      .post(this.discsUrl, JSON.stringify(disc), {headers: this.headers})
      .toPromise().then(res => res.json().data as Disc)
      .catch(this.handleError);
  }
  getDisc(id: number): Promise<Disc> {
    debugger;
    const url = `${this.discsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Disc)
      .catch(this.handleError);
  }
  update(disc: Disc): Promise<Disc> {
    const url = `${this.discsUrl}/${disc.id}`;
    return this.http
      .put(url, JSON.stringify(disc), {headers: this.headers})
      .toPromise()
      .then(() => disc)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.discsUrl}/${id}`;
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
