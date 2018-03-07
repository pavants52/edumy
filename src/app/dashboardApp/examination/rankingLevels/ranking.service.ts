import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Headers, Http } from '@angular/http';
import { Ranking } from './ranking';

@Injectable()
export class RankingService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private rankingsUrl = 'api/rankings';  // URL to web api
  constructor(private http: Http) { }
  rankings: Ranking[];
  getRankings(): Promise<Ranking[]> {
    return this.http.get(this.rankingsUrl)
      .toPromise()
      .then(response => response.json().data as Ranking[])
      .catch(this.handleError);
  }
  create(ranking: Ranking): Promise<Ranking> {
    return this.http
      .post(this.rankingsUrl, JSON.stringify(ranking), {headers: this.headers})
      .toPromise().then(res => res.json().data as Ranking)
      .catch(this.handleError);
  }
  getRanking(id: number): Promise<Ranking> {
    debugger;
    const url = `${this.rankingsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Ranking)
      .catch(this.handleError);
  }
  update(ranking: Ranking): Promise<Ranking> {
    const url = `${this.rankingsUrl}/${ranking.id}`;
    return this.http
      .put(url, JSON.stringify(ranking), {headers: this.headers})
      .toPromise()
      .then(() => ranking)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.rankingsUrl}/${id}`;
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
