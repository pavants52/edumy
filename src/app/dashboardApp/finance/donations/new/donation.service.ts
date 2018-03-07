import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Headers, Http } from '@angular/http';
import { Donation } from './donation';

@Injectable()
export class DonationService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private donationsUrl = 'api/donations';  // URL to web api
  constructor(private http: Http) { }
  donations: Donation[];
  getDonations(): Promise<Donation[]> {
    return this.http.get(this.donationsUrl)
      .toPromise()
      .then(response => response.json().data as Donation[])
      .catch(this.handleError);
  }
  create(donation: Donation): Promise<Donation> {
    return this.http
      .post(this.donationsUrl, JSON.stringify(donation), {headers: this.headers})
      .toPromise().then(res => res.json().data as Donation)
      .catch(this.handleError);
  }
  getDonation(id: number): Promise<Donation> {
    debugger;
    const url = `${this.donationsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Donation)
      .catch(this.handleError);
  }
  update(donation: Donation): Promise<Donation> {
    const url = `${this.donationsUrl}/${donation.id}`;
    return this.http
      .put(url, JSON.stringify(donation), {headers: this.headers})
      .toPromise()
      .then(() => donation)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.donationsUrl}/${id}`;
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
