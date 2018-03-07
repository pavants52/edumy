import { Component,OnInit} from '@angular/core';
import { TimetableService } from './timetable.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Router }            from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Timetable } from "./timetable";

@Component({
  selector: 'createtimetable',
  templateUrl: './createtimetable.component.html'
})
export class CreateTimetableComponent {

  timetable:Timetable = new Timetable();

  timetables:Timetable[];


  constructor( private route: ActivatedRoute,
               private location: Location,
               private timetableService:TimetableService,
               private router: Router){ }

  ngOnInit():void {
    //get the list of student setting and populate the array
    this.getTimetables();
  }
  getTimetables(): void {
    this.timetableService.getTimetables().then(values => this.timetables = values)
  }

  save():void {
    debugger;
    console.log("timetable" +this.timetable);
    if(!this.timetable.id ){
      this.timetableService.create(this.timetable)
        .then(res => {
          console.log("created" + res);
          this.timetables.push(res);
          this.timetable = new Timetable();

        });
    } else  {
      this.timetableService.update(this.timetable)
        .then(res => {
          console.log("created" + res);

          this.getTimetables();
          this.timetable = new Timetable();

        });
    }
  }
  update(id:number) {
    this.timetableService.getTimetable(id)
      .then(res => {
        this.timetable = res;
      })
  }

  delete(id:number):void {
    this.timetableService.delete(id)
      .then(() => {
        console.log("deleted" + id);
        this.getTimetables();
        this.timetable = new Timetable();
      })
  }

  cancel():void {
    this.goToTimetables();
  }
  goToTimetables():void {
    this.router.navigate(['/createtimetable']);
  }

}
