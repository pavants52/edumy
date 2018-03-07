import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Headers, Http } from '@angular/http';
import { Vehicle } from './vehicle';


@Injectable()
export class VehicleService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private vehiclesUrl = 'api/vehicles';  // URL to web api
  //private schoolsUrl =  RequestApi.GET_SCHOOLS;  // URL to web api
  constructor(private http: Http) { }
  vehicles: Vehicle[];
  getVehicles(): Promise<Vehicle[]> {
    return this.http.get(this.vehiclesUrl)
      .toPromise()
      .then(response => response.json().data as Vehicle[])
      .catch(this.handleError);
  }
  create(vehicle: Vehicle): Promise<Vehicle> {
    return this.http
      .post(this.vehiclesUrl, JSON.stringify(vehicle), {headers: this.headers})
      .toPromise().then(res => res.json().data as Vehicle)
      .catch(this.handleError);
  }

  getVehicle(id: number): Promise<Vehicle> {
    debugger;
    const url = `${this.vehiclesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Vehicle)
      .catch(this.handleError);
  }

  update(vehicle: Vehicle): Promise<Vehicle> {
    const url = `${this.vehiclesUrl}/${vehicle.id}`;
    return this.http
      .put(url, JSON.stringify(vehicle), {headers: this.headers})
      .toPromise()
      .then(() => vehicle)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.vehiclesUrl}/${id}`;
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
