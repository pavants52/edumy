import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Headers, Http } from '@angular/http';
import { Batch } from './batch';

@Injectable()
export class BatchService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private batchesUrl = 'api/batches';  // URL to web api
  constructor(private http: Http) { }
  batches: Batch[];
  getBatches(): Promise<Batch[]> {
    return this.http.get(this.batchesUrl)
      .toPromise()
      .then(response => response.json().data as Batch[])
      .catch(this.handleError);
  }
  create(batch: Batch): Promise<Batch> {
    return this.http
      .post(this.batchesUrl, JSON.stringify(batch), {headers: this.headers})
      .toPromise().then(res => res.json().data as Batch)
      .catch(this.handleError);
  }

  getBatch(id: number): Promise<Batch> {
    debugger;
    const url = `${this.batchesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Batch)
      .catch(this.handleError);
  }
  update(batch: Batch): Promise<Batch> {
    const url = `${this.batchesUrl}/${batch.id}`;
    return this.http
      .put(url, JSON.stringify(batch), {headers: this.headers})
      .toPromise()
      .then(() => batch)
      .catch(this.handleError);
  }
  delete(id: number): Promise<void> {
    const url = `${this.batchesUrl}/${id}`;
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
