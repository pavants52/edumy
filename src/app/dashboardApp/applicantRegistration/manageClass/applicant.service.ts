import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Headers, Http } from '@angular/http';
import { Applicant } from './applicant';

@Injectable()
export class ApplicantService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private applicantsUrl = 'api/applicants';  // URL to web api
  constructor(private http: Http) { }
  applicants: Applicant[];
  getApplicants(): Promise<Applicant[]> {
    return this.http.get(this.applicantsUrl)
      .toPromise()
      .then(response => response.json().data as Applicant[])
      .catch(this.handleError);
  }
  create(applicant: Applicant): Promise<Applicant> {
    return this.http
      .post(this.applicantsUrl, JSON.stringify(applicant), {headers: this.headers})
      .toPromise().then(res => res.json().data as Applicant)
      .catch(this.handleError);
  }
  getApplicant(id: number): Promise<Applicant> {
    debugger;
    const url = `${this.applicantsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Applicant)
      .catch(this.handleError);
  }
  update(applicant: Applicant): Promise<Applicant> {
    const url = `${this.applicantsUrl}/${applicant.id}`;
    return this.http
      .put(url, JSON.stringify(applicant), {headers: this.headers})
      .toPromise()
      .then(() => applicant)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.applicantsUrl}/${id}`;
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
