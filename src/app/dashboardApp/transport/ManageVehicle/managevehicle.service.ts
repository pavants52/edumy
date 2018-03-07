import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Headers, Http } from '@angular/http';
import { Managevehicle } from './managevehicle';

@Injectable()
export class ManagevehicleService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private managevehiclesUrl = 'api/managevehicles';  // URL to web api
  constructor(private http: Http) { }
  managevehicles: Managevehicle[];
  getManagevehicles(): Promise<Managevehicle[]> {
    return this.http.get(this.managevehiclesUrl)
      .toPromise()
      .then(response => response.json().data as Managevehicle[])
      .catch(this.handleError);
  }
  create(managevehicle: Managevehicle): Promise<Managevehicle> {
    return this.http
      .post(this.managevehiclesUrl, JSON.stringify(managevehicle), {headers: this.headers})
      .toPromise().then(res => res.json().data as Managevehicle)
      .catch(this.handleError);
  }
  getManagevehicle(id: number): Promise<Managevehicle> {
    debugger;
    const url = `${this.managevehiclesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Managevehicle)
      .catch(this.handleError);
  }
  update(managevehicle: Managevehicle): Promise<Managevehicle> {
    const url = `${this.managevehiclesUrl}/${managevehicle.id}`;
    return this.http
      .put(url, JSON.stringify(managevehicle), {headers: this.headers})
      .toPromise()
      .then(() => managevehicle)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.managevehiclesUrl}/${id}`;
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
