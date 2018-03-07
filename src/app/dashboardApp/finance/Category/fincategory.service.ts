import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Headers, Http } from '@angular/http';
import { Fincategory } from './fincategory';

@Injectable()
export class FincategoryService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private fincategorysUrl = 'api/fincategorys';  // URL to web api
  constructor(private http: Http) { }
  fincategorys: Fincategory[];
  getFincategorys(): Promise<Fincategory[]> {
    return this.http.get(this.fincategorysUrl)
      .toPromise()
      .then(response => response.json().data as Fincategory[])
      .catch(this.handleError);
  }
  create(fincategory: Fincategory): Promise<Fincategory> {
    return this.http
      .post(this.fincategorysUrl, JSON.stringify(fincategory), {headers: this.headers})
      .toPromise().then(res => res.json().data as Fincategory)
      .catch(this.handleError);
  }
  getFincategory(id: number): Promise<Fincategory> {
    debugger;
    const url = `${this.fincategorysUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Fincategory)
      .catch(this.handleError);
  }
  update(fincategory: Fincategory): Promise<Fincategory> {
    const url = `${this.fincategorysUrl}/${fincategory.id}`;
    return this.http
      .put(url, JSON.stringify(fincategory), {headers: this.headers})
      .toPromise()
      .then(() => fincategory)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.fincategorysUrl}/${id}`;
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
