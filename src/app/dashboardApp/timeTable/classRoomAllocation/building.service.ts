import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Headers, Http } from '@angular/http';
import { Building } from './building';

@Injectable()
export class BuildingService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private buildingsUrl = 'api/buildings';  // URL to web api
  constructor(private http: Http) { }
  buildings: Building[];
  getBuildings(): Promise<Building[]> {
    return this.http.get(this.buildingsUrl)
      .toPromise()
      .then(response => response.json().data as Building[])
      .catch(this.handleError);
  }
  create(building: Building): Promise<Building> {
    return this.http
      .post(this.buildingsUrl, JSON.stringify(building), {headers: this.headers})
      .toPromise().then(res => res.json().data as Building)
      .catch(this.handleError);
  }
  getBuilding(id: number): Promise<Building> {
    debugger;
    const url = `${this.buildingsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Building)
      .catch(this.handleError);
  }
  update(building: Building): Promise<Building> {
    const url = `${this.buildingsUrl}/${building.id}`;
    return this.http
      .put(url, JSON.stringify(building), {headers: this.headers})
      .toPromise()
      .then(() => building)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.buildingsUrl}/${id}`;
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
