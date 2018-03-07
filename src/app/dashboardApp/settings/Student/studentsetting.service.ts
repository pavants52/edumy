import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Headers, Http } from '@angular/http';
import { StudentSetting } from './studentsetting';

@Injectable()
export class StudentSettingService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private studentsettingsUrl = 'api/studentsettings';  // URL to web api
  constructor(private http: Http) { }
  studentSettings: StudentSetting[];
  getStudentSettings(): Promise<StudentSetting[]> {
    return this.http.get(this.studentsettingsUrl)
      .toPromise()
      .then(response => response.json().data as StudentSetting[])
      .catch(this.handleError);
  }
  create(studentsetting: StudentSetting): Promise<StudentSetting> {
    return this.http
      .post(this.studentsettingsUrl, JSON.stringify(studentsetting), {headers: this.headers})
      .toPromise().then(res => res.json().data as StudentSetting)
      .catch(this.handleError);
  }
  getStudentSetting(id: number): Promise<StudentSetting> {
    debugger;
    const url = `${this.studentsettingsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as StudentSetting)
      .catch(this.handleError);
  }
  update(studentsetting: StudentSetting): Promise<StudentSetting> {
    const url = `${this.studentsettingsUrl}/${studentsetting.id}`;
    return this.http
      .put(url, JSON.stringify(studentsetting), {headers: this.headers})
      .toPromise()
      .then(() => studentsetting)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.studentsettingsUrl}/${id}`;
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
