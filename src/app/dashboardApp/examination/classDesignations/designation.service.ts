import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Headers, Http } from '@angular/http';
import { Designation } from './designation';

@Injectable()
export class DesignationService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private designationsUrl = 'api/designations';  // URL to web api
  constructor(private http: Http) { }
  designations: Designation[];
  getDesignations(): Promise<Designation[]> {
    return this.http.get(this.designationsUrl)
      .toPromise()
      .then(response => response.json().data as Designation[])
      .catch(this.handleError);
  }
  create(designation: Designation): Promise<Designation> {
    return this.http
      .post(this.designationsUrl, JSON.stringify(designation), {headers: this.headers})
      .toPromise().then(res => res.json().data as Designation)
      .catch(this.handleError);
  }
  getDesignation(id: number): Promise<Designation> {
    debugger;
    const url = `${this.designationsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Designation)
      .catch(this.handleError);
  }
  update(designation: Designation): Promise<Designation> {
    const url = `${this.designationsUrl}/${designation.id}`;
    return this.http
      .put(url, JSON.stringify(designation), {headers: this.headers})
      .toPromise()
      .then(() => designation)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.designationsUrl}/${id}`;
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
