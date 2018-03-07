import { Component,OnInit} from '@angular/core';
import { OnlineService } from './online.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Router }            from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Online } from "./online";

@Component({
  selector: 'onlineexam',
  templateUrl: './onlineexam.component.html'
})
export class OnlineExamComponent {
  online:Online = new Online();

  onlines:Online[];


  constructor( private route: ActivatedRoute,
               private location: Location,
               private onlineService:OnlineService,
               private router: Router){ }

  ngOnInit():void {
    //get the list of student setting and populate the array
    this.getOnlines();
  }
  getOnlines(): void {
    this.onlineService.getOnlines().then(values => this.onlines = values)
  }

  save():void {
    debugger;
    console.log("online" +this.online);
    if(!this.online.id ){
      this.onlineService.create(this.online)
        .then(res => {
          console.log("created" + res);
          this.onlines.push(res);
          this.online = new Online();

        });
    } else  {
      this.onlineService.update(this.online)
        .then(res => {
          console.log("created" + res);

          this.getOnlines();
          this.online = new Online();

        });
    }
  }
  update(id:number) {
    this.onlineService.getOnline(id)
      .then(res => {
        this.online = res;
      })
  }

  delete(id:number):void {
    this.onlineService.delete(id)
      .then(() => {
        console.log("deleted" + id);
        this.getOnlines();
        this.online = new Online();
      })
  }

  cancel():void {
    this.goToOnlines();
  }
  goToOnlines():void {
    this.router.navigate(['/onlineexam']);
  }

}
