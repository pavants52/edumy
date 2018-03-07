import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Headers, Http } from '@angular/http';
import { Asset } from './asset';

@Injectable()
export class AssetService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private assetsUrl = 'api/assets';  // URL to web api
  constructor(private http: Http) { }
  assets: Asset[];
  getAssets(): Promise<Asset[]> {
    return this.http.get(this.assetsUrl)
      .toPromise()
      .then(response => response.json().data as Asset[])
      .catch(this.handleError);
  }
  create(asset: Asset): Promise<Asset> {
    return this.http
      .post(this.assetsUrl, JSON.stringify(asset), {headers: this.headers})
      .toPromise().then(res => res.json().data as Asset)
      .catch(this.handleError);
  }
  getAsset(id: number): Promise<Asset> {
    debugger;
    const url = `${this.assetsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Asset)
      .catch(this.handleError);
  }
  update(asset: Asset): Promise<Asset> {
    const url = `${this.assetsUrl}/${asset.id}`;
    return this.http
      .put(url, JSON.stringify(asset), {headers: this.headers})
      .toPromise()
      .then(() => asset)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.assetsUrl}/${id}`;
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
