import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from './utilityApp/services/localstorage.service';
import { Broadcaster } from './utilityApp/services/broadcaster';
import { MessageEvent } from './utilityApp/services/message_event';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  isUserLogin: boolean = false;
  txtId: string = "page-wrapper";
  landingpageclass: string;
  constructor(private localstorageService: LocalstorageService,
    private broadcaster: Broadcaster,
    private message_event: MessageEvent
  ) {
    this.isUserLogin = false;

    // if (localstorageService.getData("isUserLogin")) {
    //   this.isUserLogin = true;
    // }

  }

  ngOnInit() {
    // this.registerStringBroadcast();
    this.registerTypeBroadcast();

    this.loadId();
  }

  registerTypeBroadcast() {
    this.message_event.on().subscribe(message => {
      // alert("true");
      this.isUserLogin = true;
      this.loadId();
    })


  }

  loadId() {
    if (this.isUserLogin) {

      this.txtId = "page-wrapper";
      this.landingpageclass ="landing-page";
    }
    else {
      this.txtId = "";
      this.landingpageclass ="landing-page";
    }
  }

}
