import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { RequestApi } from '../../global.api';
import { VerifyUserPhone } from '../models/account';
import { ResponseModel } from '../../utilityApp/models/common';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class ConfirmMobleService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private requestURL = "";  // URL to web api

    constructor(private http: Http) { }

    verifyUserPhone(data: VerifyUserPhone): Promise<ResponseModel> {
        this.requestURL = RequestApi.PUT_Tenant_Verify_Phone;
        return this.http.put(this.requestURL, data, { headers: this.headers })
            .toPromise()
            .then(response => response.json() as ResponseModel);
    }

    checkStatusCode(statusCode: number): string {
        switch (statusCode) {
            case 200:
                return "successful operation";
            case 201:
                return "Already registered also verified with Phone Number and Domain name. Go signin.";
            case 403:
                return "Unauthorized access";
            case 404:
                return "Not Found";
            case 422:
                return "Invalid input";
            case 500:
                return "Unknown error";
            default:
                return "Status code not found";
        }


    }

}
