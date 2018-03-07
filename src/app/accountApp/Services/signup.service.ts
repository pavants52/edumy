import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { RequestApi } from '../../global.api';
import { Login, Registration, CheckMobileNumber } from '../models/account';
import { ResponseModel } from '../../utilityApp/models/common';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class SignupService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private requestURL = "";  // URL to web api

    constructor(private http: Http) { }

    registerUser(data: Registration): Promise<ResponseModel> {
        this.requestURL = RequestApi.POST_Tenant_Register;
        return this.http.post(this.requestURL, data, { headers: this.headers })
            .toPromise()
            .then(response => response.json() as ResponseModel);
    }

    checkStatusCode(statusCode: number): string {
        switch (statusCode) {
            case 200:
                return "successful operation";
            case 201:
                return "Already registered also verified with Phone Number and Domain name. Go signin.";
            case 203:
                return "Already Registered with Phone Number and Domain name but not yet verify phone.";
            case 226:
                return "Already Registered with Phone Number";
            case 403:
                return "Unauthorized access";
            case 409:
                return "Domain name is conflict";
            case 422:
                return "Invalid input";
            case 500:
                return "Unknown error";
            default:
                return "Status Not define";
        }


    }

}
