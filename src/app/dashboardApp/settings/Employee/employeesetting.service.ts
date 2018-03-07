import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Headers, Http } from '@angular/http';
import { EmployeeSetting } from './employeesetting';

@Injectable()
export class EmployeeSettingService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private employeesettingsUrl = 'api/employeesettings';  // URL to web api
  constructor(private http: Http) { }
  employeeSettings: EmployeeSetting[];
  getEmployeeSettings(): Promise<EmployeeSetting[]> {
    return this.http.get(this.employeesettingsUrl)
      .toPromise()
      .then(response => response.json().data as EmployeeSetting[])
      .catch(this.handleError);
  }
  create(employeesetting: EmployeeSetting): Promise<EmployeeSetting> {
    return this.http
      .post(this.employeesettingsUrl, JSON.stringify(employeesetting), {headers: this.headers})
      .toPromise().then(res => res.json().data as EmployeeSetting)
      .catch(this.handleError);
  }

  getEmployeeSetting(id: number): Promise<EmployeeSetting> {
    debugger;
    const url = `${this.employeesettingsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as EmployeeSetting)
      .catch(this.handleError);
  }
  update(employeesetting: EmployeeSetting): Promise<EmployeeSetting> {
    const url = `${this.employeesettingsUrl}/${employeesetting.id}`;
    return this.http
      .put(url, JSON.stringify(employeesetting), {headers: this.headers})
      .toPromise()
      .then(() => employeesetting)
      .catch(this.handleError);
  }
  delete(id: number): Promise<void> {
    const url = `${this.employeesettingsUrl}/${id}`;
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
