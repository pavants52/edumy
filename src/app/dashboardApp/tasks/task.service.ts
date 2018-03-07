import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Headers, Http } from '@angular/http';
import { Task } from './task';

@Injectable()
export class TaskService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private tasksUrl = 'api/tasks';  // URL to web api
  constructor(private http: Http) { }
  tasks: Task[];
  getTasks(): Promise<Task[]> {
    return this.http.get(this.tasksUrl)
      .toPromise()
      .then(response => response.json().data as Task[])
      .catch(this.handleError);
  }
  create(task: Task): Promise<Task> {
    return this.http
      .post(this.tasksUrl, JSON.stringify(task), {headers: this.headers})
      .toPromise().then(res => res.json().data as Task)
      .catch(this.handleError);
  }
  getTask(id: number): Promise<Task> {
    debugger;
    const url = `${this.tasksUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Task)
      .catch(this.handleError);
  }
  update(task: Task): Promise<Task> {
    const url = `${this.tasksUrl}/${task.id}`;
    return this.http
      .put(url, JSON.stringify(task), {headers: this.headers})
      .toPromise()
      .then(() => task)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.tasksUrl}/${id}`;
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
