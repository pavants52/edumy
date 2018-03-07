import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Headers, Http } from '@angular/http';
import { Librarysetting } from './librarysetting';

@Injectable()
export class LibrarysettingService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private librarysettingsUrl = 'api/librarysettings';  // URL to web api
  constructor(private http: Http) { }

  librarysettings: Librarysetting[];
  getLibrarysettings(): Promise<Librarysetting[]> {
    return this.http.get(this.librarysettingsUrl)
      .toPromise()
      .then(response => response.json().data as Librarysetting[])
      .catch(this.handleError);
  }
  create(librarysetting: Librarysetting): Promise<Librarysetting> {
    return this.http
      .post(this.librarysettingsUrl, JSON.stringify(librarysetting), {headers: this.headers})
      .toPromise().then(res => res.json().data as Librarysetting)
      .catch(this.handleError);
  }

  getLibrarysetting(id: number): Promise<Librarysetting> {
    debugger;
    const url = `${this.librarysettingsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Librarysetting)
      .catch(this.handleError);
  }
  update(librarysetting: Librarysetting): Promise<Librarysetting> {
    const url = `${this.librarysettingsUrl}/${librarysetting.id}`;
    return this.http
      .put(url, JSON.stringify(librarysetting), {headers: this.headers})
      .toPromise()
      .then(() => librarysetting)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.librarysettingsUrl}/${id}`;
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
