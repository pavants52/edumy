import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Headers, Http } from '@angular/http';
import { Createcat } from './createcat';

@Injectable()
export class CreatecatService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private createcatsUrl = 'api/createcats';  // URL to web api
  constructor(private http: Http) { }
  createcats: Createcat[];
  getCreatecats(): Promise<Createcat[]> {
    return this.http.get(this.createcatsUrl)
      .toPromise()
      .then(response => response.json().data as Createcat[])
      .catch(this.handleError);
  }
  create(createcat: Createcat): Promise<Createcat> {
    return this.http
      .post(this.createcatsUrl, JSON.stringify(createcat), {headers: this.headers})
      .toPromise().then(res => res.json().data as Createcat)
      .catch(this.handleError);
  }
  getCreatecat(id: number): Promise<Createcat> {
    debugger;
    const url = `${this.createcatsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Createcat)
      .catch(this.handleError);
  }
  update(createcat: Createcat): Promise<Createcat> {
    const url = `${this.createcatsUrl}/${createcat.id}`;
    return this.http
      .put(url, JSON.stringify(createcat), {headers: this.headers})
      .toPromise()
      .then(() => createcat)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.createcatsUrl}/${id}`;
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
