import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Headers, Http } from '@angular/http';
import { Hostel } from './hostel';


@Injectable()
export class HostelService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private hostelsUrl = 'api/hostels';  // URL to web api
  //private schoolsUrl =  RequestApi.GET_SCHOOLS;  // URL to web api
  constructor(private http: Http) { }
  hostels: Hostel[];
  getHostels(): Promise<Hostel[]> {
    return this.http.get(this.hostelsUrl)
      .toPromise()
      .then(response => response.json().data as Hostel[])
      .catch(this.handleError);
  }
  create(hostel: Hostel): Promise<Hostel> {
    return this.http
      .post(this.hostelsUrl, JSON.stringify(hostel), {headers: this.headers})
      .toPromise().then(res => res.json().data as Hostel)
      .catch(this.handleError);
  }

  getHostel(id: number): Promise<Hostel> {
    debugger;
    const url = `${this.hostelsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Hostel)
      .catch(this.handleError);
  }

  update(hostel: Hostel): Promise<Hostel> {
    const url = `${this.hostelsUrl}/${hostel.id}`;
    return this.http
      .put(url, JSON.stringify(hostel), {headers: this.headers})
      .toPromise()
      .then(() => hostel)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.hostelsUrl}/${id}`;
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
