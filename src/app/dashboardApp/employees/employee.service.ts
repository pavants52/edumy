import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Headers, Http } from '@angular/http';
import { Employee } from './employee';

@Injectable()
export class EmployeeService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private employeesUrl = 'api/employees';  // URL to web api
  constructor(private http: Http) { }

  employees: Employee[];
  getEmployees(): Promise<Employee[]> {
    return this.http.get(this.employeesUrl)
      .toPromise()
      .then(response => response.json().data as Employee[])
      .catch(this.handleError);
  }
  create(employee: Employee): Promise<Employee> {
    return this.http
      .post(this.employeesUrl, JSON.stringify(employee), {headers: this.headers})
      .toPromise().then(res => res.json().data as Employee)
      .catch(this.handleError);
  }

  getEmployee(id: number): Promise<Employee> {
    debugger;
    const url = `${this.employeesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Employee)
      .catch(this.handleError);
  }
  update(employee: Employee): Promise<Employee> {
    const url = `${this.employeesUrl}/${employee.id}`;
    return this.http
      .put(url, JSON.stringify(employee), {headers: this.headers})
      .toPromise()
      .then(() => employee)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.employeesUrl}/${id}`;
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
