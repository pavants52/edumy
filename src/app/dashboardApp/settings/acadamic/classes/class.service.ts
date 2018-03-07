import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Headers, Http } from '@angular/http';
import { ClassModel} from './classmodel';

@Injectable()
export class ClassService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private classmodelsUrl = 'api/classmodels';  // URL to web api
  constructor(private http: Http) { }
  classModels: ClassModel[];
  getClassModels(): Promise<ClassModel[]> {
    return this.http.get(this.classmodelsUrl)
      .toPromise()
      .then(response => response.json().data as ClassModel[])
      .catch(this.handleError);
  }
  create(classmodel: ClassModel): Promise<ClassModel> {
    return this.http
      .post(this.classmodelsUrl, JSON.stringify(classmodel), {headers: this.headers})
      .toPromise().then(res => res.json().data as ClassModel)
      .catch(this.handleError);
  }
  getClassModel(id: number): Promise<ClassModel> {
    debugger;
    const url = `${this.classmodelsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as ClassModel)
      .catch(this.handleError);
  }
  update(classmodel: ClassModel): Promise<ClassModel> {
    const url = `${this.classmodelsUrl}/${classmodel.id}`;
    return this.http
      .put(url, JSON.stringify(classmodel), {headers: this.headers})
      .toPromise()
      .then(() => classmodel)
      .catch(this.handleError);
  }
  delete(id: number): Promise<void> {
    const url = `${this.classmodelsUrl}/${id}`;
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
