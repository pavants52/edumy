import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Headers, Http } from '@angular/http';
import { Weightage } from './weightage';

@Injectable()
export class WeightageService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private weightagesUrl = 'api/weightages';  // URL to web api
  constructor(private http: Http) { }
  weightages: Weightage[];
  getWeightages(): Promise<Weightage[]> {
    return this.http.get(this.weightagesUrl)
      .toPromise()
      .then(response => response.json().data as Weightage[])
      .catch(this.handleError);
  }
  create(weightage: Weightage): Promise<Weightage> {
    return this.http
      .post(this.weightagesUrl, JSON.stringify(weightage), {headers: this.headers})
      .toPromise().then(res => res.json().data as Weightage)
      .catch(this.handleError);
  }
  getWeightage(id: number): Promise<Weightage> {
    debugger;
    const url = `${this.weightagesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Weightage)
      .catch(this.handleError);
  }
  update(weightage: Weightage): Promise<Weightage> {
    const url = `${this.weightagesUrl}/${weightage.id}`;
    return this.http
      .put(url, JSON.stringify(weightage), {headers: this.headers})
      .toPromise()
      .then(() => weightage)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.weightagesUrl}/${id}`;
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
