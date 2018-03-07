export class CheckMobileNumber {
    MobileNumber: number;
}

export class Login {
    userid: string;
    password: string;
    domainName: string;
}

export class Registration {
    countryCode: string;
    phone: string;
    password: string;
    domainName: string;
    otp: string;
}

export class VerifyUserPhone {
    userid:string;
    code:string;
}