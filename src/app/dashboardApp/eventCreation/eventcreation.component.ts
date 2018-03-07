import { Component,OnInit} from '@angular/core';
import { EventService } from './event.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Router }            from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Event } from "./event";

@Component({
  selector: 'eventcreation',
  templateUrl: './eventcreation.component.html'
})
export class EventCreationComponent {

  event:Event = new Event();

  events:Event[];


  constructor( private route: ActivatedRoute,
               private location: Location,
               private eventService:EventService,
               private router: Router){ }

  ngOnInit():void {
    //get the list of student setting and populate the array
    this.getEvents();
  }
  getEvents(): void {
    this.eventService.getEvents().then(values => this.events = values)
  }

  save():void {
    debugger;
    console.log("event" +this.event);
    if(!this.event.id ){
      this.eventService.create(this.event)
        .then(res => {
          console.log("created" + res);
          this.events.push(res);
          this.event = new Event();

        });
    } else  {
      this.eventService.update(this.event)
        .then(res => {
          console.log("created" + res);

          this.getEvents();
          this.event = new Event();

        });
    }
  }
  update(id:number) {
    this.eventService.getEvent(id)
      .then(res => {
        this.event = res;
      })
  }

  delete(id:number):void {
    this.eventService.delete(id)
      .then(() => {
        console.log("deleted" + id);
        this.getEvents();
        this.event = new Event();
      })
  }

  cancel():void {
    this.goToEvents();
  }
  goToEvents():void {
    this.router.navigate(['/eventcreation']);
  }

}
