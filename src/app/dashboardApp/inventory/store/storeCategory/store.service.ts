import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Headers, Http } from '@angular/http';
import { Store } from './store';

@Injectable()
export class StoreService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private storesUrl = 'api/stores';  // URL to web api
  constructor(private http: Http) { }
  stores: Store[];
  getStores(): Promise<Store[]> {
    return this.http.get(this.storesUrl)
      .toPromise()
      .then(response => response.json().data as Store[])
      .catch(this.handleError);
  }
  create(store: Store): Promise<Store> {
    return this.http
      .post(this.storesUrl, JSON.stringify(store), {headers: this.headers})
      .toPromise().then(res => res.json().data as Store)
      .catch(this.handleError);
  }
  getStore(id: number): Promise<Store> {
    debugger;
    const url = `${this.storesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Store)
      .catch(this.handleError);
  }
  update(store: Store): Promise<Store> {
    const url = `${this.storesUrl}/${store.id}`;
    return this.http
      .put(url, JSON.stringify(store), {headers: this.headers})
      .toPromise()
      .then(() => store)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.storesUrl}/${id}`;
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
