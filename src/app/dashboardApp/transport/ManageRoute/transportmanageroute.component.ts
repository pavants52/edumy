import { Component,OnInit} from '@angular/core';
import { ManagerouteService } from './manageroute.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Router }            from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Manageroute } from "./manageroute";

@Component({
  selector: 'transportmanageroute',
  templateUrl: './transportmanageroute.component.html'
})
export class TransportManageRouteComponent {

  manageroute:Manageroute = new Manageroute();

  manageroutes:Manageroute[];

  constructor( private route: ActivatedRoute,
               private location: Location,
               private managerouteService:ManagerouteService,
               private router: Router){ }

  ngOnInit():void {
    //get the list of student setting and populate the array
    this.getManageroutes();
  }
  getManageroutes(): void {
    this.managerouteService.getManageroutes().then(values => this.manageroutes = values)
  }

  save():void {
    debugger;
    console.log("manageroute" +this.manageroute);
    if(!this.manageroute.id ){
      this.managerouteService.create(this.manageroute)
        .then(res => {
          console.log("created" + res);
          this.manageroutes.push(res);
          this.manageroute = new Manageroute();

        });
    } else  {
      this.managerouteService.update(this.manageroute)
        .then(res => {
          console.log("created" + res);

          this.getManageroutes();
          this.manageroute = new Manageroute();

        });
    }
  }
  update(id:number) {
    this.managerouteService.getManageroute(id)
      .then(res => {
        this.manageroute = res;
      })
  }

  delete(id:number):void {
    this.managerouteService.delete(id)
      .then(() => {
        console.log("deleted" + id);
        this.getManageroutes();
        this.manageroute = new Manageroute();
      })
  }

  cancel():void {
    this.goToManageroutes();
  }
  goToManageroutes():void {
    this.router.navigate(['/transportmanageroute']);
  }

}
