import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Headers, Http } from '@angular/http';
import { Student } from './student';

@Injectable()
export class StudentService {
private headers = new Headers({'Content-Type': 'application/json'});
  private studentUrl = 'api/students';  // URL to web api
  constructor(private http: Http) { }
 students: Student[];
 getStudents(): Promise<Student[]> {
   return this.http.get(this.studentUrl)
               .toPromise()
               .then(response => response.json().data as Student[])
               .catch(this.handleError);
  }

  create(student: Student): Promise<Student> {
    return this.http
      .post(this.studentUrl, JSON.stringify(student), {headers: this.headers})
      .toPromise().then(res => res.json().data as Student)
      .catch(this.handleError);
  }

   getStudent(id: number): Promise<Student> {
    const url = `${this.studentUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Student)
      .catch(this.handleError);
  }

  update(student: Student): Promise<Student> {
    const url = `${this.studentUrl}/${student.id}`;
    return this.http
      .put(url, JSON.stringify(student), {headers: this.headers})
      .toPromise()
      .then(() => student)
      .catch(this.handleError);
  }
  delete(id: number): Promise<void> {
    const url = `${this.studentUrl}/${id}`;
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
