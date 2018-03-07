import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Headers, Http } from '@angular/http';
import { Roomadd } from './roomadd';

@Injectable()
export class RoomaddService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private roomaddsUrl = 'api/roomadds';  // URL to web api
  constructor(private http: Http) { }

  roomadds: Roomadd[];
  getRoomadds(): Promise<Roomadd[]> {
    return this.http.get(this.roomaddsUrl)
      .toPromise()
      .then(response => response.json().data as Roomadd[])
      .catch(this.handleError);
  }
  create(roomadd: Roomadd): Promise<Roomadd> {
    return this.http
      .post(this.roomaddsUrl, JSON.stringify(roomadd), {headers: this.headers})
      .toPromise().then(res => res.json().data as Roomadd)
      .catch(this.handleError);
  }

  getRoomadd(id: number): Promise<Roomadd> {
    debugger;
    const url = `${this.roomaddsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Roomadd)
      .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
