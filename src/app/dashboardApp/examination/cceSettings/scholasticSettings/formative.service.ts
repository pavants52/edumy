import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Headers, Http } from '@angular/http';
import { Formative } from './formative';

@Injectable()
export class FormativeService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private formativesUrl = 'api/formatives';  // URL to web api
  constructor(private http: Http) { }
  formatives: Formative[];
  getFormatives(): Promise<Formative[]> {
    return this.http.get(this.formativesUrl)
      .toPromise()
      .then(response => response.json().data as Formative[])
      .catch(this.handleError);
  }
  create(formative: Formative): Promise<Formative> {
    return this.http
      .post(this.formativesUrl, JSON.stringify(formative), {headers: this.headers})
      .toPromise().then(res => res.json().data as Formative)
      .catch(this.handleError);
  }
  getFormative(id: number): Promise<Formative> {
    debugger;
    const url = `${this.formativesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Formative)
      .catch(this.handleError);
  }
  update(formative: Formative): Promise<Formative> {
    const url = `${this.formativesUrl}/${formative.id}`;
    return this.http
      .put(url, JSON.stringify(formative), {headers: this.headers})
      .toPromise()
      .then(() => formative)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.formativesUrl}/${id}`;
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
