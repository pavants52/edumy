import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Headers, Http } from '@angular/http';
import { School } from './school';
import {RequestApi } from '../../global.api';

@Injectable()
export class SchoolService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private schoolsUrl = 'api/schools';  // URL to web api
  //private schoolsUrl =  RequestApi.GET_SCHOOLS;  // URL to web api
  constructor(private http: Http) { }
  schools: School[];
  getSchools(): Promise<School[]> {
    return this.http.get(this.schoolsUrl)
      .toPromise()
      .then(response => response.json().data as School[])
      .catch(this.handleError);
  }
  create(school: School): Promise<School> {
    return this.http
      .post(this.schoolsUrl, JSON.stringify(school), {headers: this.headers})
      .toPromise().then(res => res.json().data as School)
      .catch(this.handleError);
  }

  getSchool(id: number): Promise<School> {
    debugger;
    const url = `${this.schoolsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as School)
      .catch(this.handleError);
  }

  update(school: School): Promise<School> {
    const url = `${this.schoolsUrl}/${school.id}`;
    return this.http
      .put(url, JSON.stringify(school), {headers: this.headers})
      .toPromise()
      .then(() => school)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.schoolsUrl}/${id}`;
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
