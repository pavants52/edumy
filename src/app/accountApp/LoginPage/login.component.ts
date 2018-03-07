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

<div class="navbar-wrapper" style="margin-top: 0; position: static">
    <nav class="navbar navbar-default " role="navigation" style="position: static; padding-bottom: 5px;">
      <div class="container">
        <div id="navbar" class="goal-animation navbar-collapse collapse in" aria-hidden="false">
          <div class="navbar-header page-scroll">
            <button aria-controls="navbar" type="button" data-target="#navbar" class="navbar-toggle">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
            <a routerLink="/index"><img class="logo_img" src="assets/img/landing/school.png" alt="laptop"></a>
          </div>

        <!--  <ul class="nav navbar-nav navbar-right">
            <li><a class="page-scroll lan_login haderStyle" routerLink="/signup">Signup</a></li>
            <li>
              <button type="submit" class="btn btn-primary block full-width m-b getstarted_button" routerLink="/signup">GET STARTED</button>
            </li>
          </ul> -->
        </div>
      </div>
    </nav>
  </div>

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
