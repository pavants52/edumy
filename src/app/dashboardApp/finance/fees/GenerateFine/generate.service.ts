import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Headers, Http } from '@angular/http';
import { Generate } from './generate';

@Injectable()
export class GenerateService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private generatesUrl = 'api/generates';  // URL to web api
  constructor(private http: Http) { }
  generates: Generate[];
  getGenerates(): Promise<Generate[]> {
    return this.http.get(this.generatesUrl)
      .toPromise()
      .then(response => response.json().data as Generate[])
      .catch(this.handleError);
  }
  create(generate: Generate): Promise<Generate> {
    return this.http
      .post(this.generatesUrl, JSON.stringify(generate), {headers: this.headers})
      .toPromise().then(res => res.json().data as Generate)
      .catch(this.handleError);
  }
  getGenerate(id: number): Promise<Generate> {
    debugger;
    const url = `${this.generatesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Generate)
      .catch(this.handleError);
  }
  update(generate: Generate): Promise<Generate> {
    const url = `${this.generatesUrl}/${generate.id}`;
    return this.http
      .put(url, JSON.stringify(generate), {headers: this.headers})
      .toPromise()
      .then(() => generate)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.generatesUrl}/${id}`;
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
