import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Headers, Http } from '@angular/http';
import { Exam } from './exam';

@Injectable()
export class ExamService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private examsUrl = 'api/exams';  // URL to web api
  constructor(private http: Http) { }
  exams: Exam[];
  getExams(): Promise<Exam[]> {
    return this.http.get(this.examsUrl)
      .toPromise()
      .then(response => response.json().data as Exam[])
      .catch(this.handleError);
  }
  create(exam: Exam): Promise<Exam> {
    return this.http
      .post(this.examsUrl, JSON.stringify(exam), {headers: this.headers})
      .toPromise().then(res => res.json().data as Exam)
      .catch(this.handleError);
  }
  getExam(id: number): Promise<Exam> {
    debugger;
    const url = `${this.examsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Exam)
      .catch(this.handleError);
  }
  update(exam: Exam): Promise<Exam> {
    const url = `${this.examsUrl}/${exam.id}`;
    return this.http
      .put(url, JSON.stringify(exam), {headers: this.headers})
      .toPromise()
      .then(() => exam)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.examsUrl}/${id}`;
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
