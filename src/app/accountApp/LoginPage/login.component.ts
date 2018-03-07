import { Component, OnInit } from '@angular/core';
import { Login, Registration, CheckMobileNumber } from '../models/account';
import { LoginService } from '../services/login.service';
import { Router } from "@angular/router";
import { LocalstorageService } from '../../utilityApp/services/localstorage.service';
import { NotificationService } from '../../utilityApp/services/notification.service';
import { SharedService } from '../../utilityApp/services/shared.service';
import { Broadcaster } from '../../utilityApp/services/broadcaster';
import { MessageEvent } from '../../utilityApp/services/message_event';


@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})

export class LoginComponent {

  login: Login = new Login();
  subDomainName: string = "";
  logindata: any[];
  mobNumber: string = "";
  length: number;
  passwd: string = "";
  flag: number = 0;

  //flgdata: string = "src/assets/img/flags/16/India.png";

  constructor(private loginService: LoginService, private router: Router,
    private localstorageService: LocalstorageService,
    private notificationService: NotificationService,
    private sharedService: SharedService,
    private broadcaster:Broadcaster,
  private message_event:MessageEvent
  ) {
    debugger
    localstorageService.removeIteamData('userData');

    try {
      this.login.userid = JSON.parse(this.sharedService.getDataByKey("mobileNumber"));
      this.login.password = JSON.parse(this.sharedService.getDataByKey("password"));
      this.subDomainName = JSON.parse(this.sharedService.getDataByKey("domainName"));
    }
    catch (e) {
      this.login.userid = "";
      this.login.password = "";
      this.subDomainName = "";
    }

    // this.login.userid = JSON.parse(this.sharedService.getDataByKey("mobileNumber"));
    // this.login.password = JSON.parse(this.sharedService.getDataByKey("password"));
    // this.subDomainName = JSON.parse(this.sharedService.getDataByKey("domainName"));

  }


  userLogin(loginModel: Login) {

    debugger
    loginModel.domainName = this.subDomainName + ".dev.edumy.in";

    this.logindata = this.localstorageService.getData("UserModel");

    // this.length = this.logindata.length;

    // for(let i = 0; i< this.length; i++){
    //   this.mobNumber = this.logindata[i].mobileNumber;
    //   this.passwd = this.logindata[i].password;
    //   this.length = this.logindata.length;
    //   if(this.mobNumber == loginModel.userid && this.passwd == loginModel.password){
    //     this.flag = 1;
    debugger
      this.emitTypeBroadcast();
   // this.notificationService.success("Login Successfull", "Welcome to Institute management platform");
    this.router.navigate(['dashboard']);
    // }
    // }

    // if(this.flag == 0){
    //   this.notificationService.success("Login Unsuccessfull", "Invalid mobile number or password.");
    // }


    //if(loginModel.userid == )


    // this.loginService.userLogin(loginModel)
    //   .then(result => {
    //     if (result.status == 200) {
    //       this.notificationService.success("Login!", this.loginService.checkStatusCode(result.status));
    //       this.localstorageService.setData('userData', result.data);

    //       this.localstorageService.setData("isUserLogin", true);

    //       window.location.href = "http://localhost:1234/dashboard";
    //       //this.router.navigate(['dashboard']);
    //     }
    //     else {
    //       this.localstorageService.setData("isUserLogin", false);
    //       this.notificationService.success("Login!", this.loginService.checkStatusCode(result.status));
    //     }

    //   });


  }

  emitTypeBroadcast()
    {
      this.message_event.fire("kishor");

    }

}
