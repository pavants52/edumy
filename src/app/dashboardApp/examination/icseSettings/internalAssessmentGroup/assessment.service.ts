import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Headers, Http } from '@angular/http';
import { Assessment } from './assessment';

@Injectable()
export class AssessmentService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private assessmentsUrl = 'api/assessments';  // URL to web api
  constructor(private http: Http) { }
  assessments: Assessment[];
  getAssessments(): Promise<Assessment[]> {
    return this.http.get(this.assessmentsUrl)
      .toPromise()
      .then(response => response.json().data as Assessment[])
      .catch(this.handleError);
  }
  create(assessment: Assessment): Promise<Assessment> {
    return this.http
      .post(this.assessmentsUrl, JSON.stringify(assessment), {headers: this.headers})
      .toPromise().then(res => res.json().data as Assessment)
      .catch(this.handleError);
  }
  getAssessment(id: number): Promise<Assessment> {
    debugger;
    const url = `${this.assessmentsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Assessment)
      .catch(this.handleError);
  }
  update(assessment: Assessment): Promise<Assessment> {
    const url = `${this.assessmentsUrl}/${assessment.id}`;
    return this.http
      .put(url, JSON.stringify(assessment), {headers: this.headers})
      .toPromise()
      .then(() => assessment)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.assessmentsUrl}/${id}`;
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
