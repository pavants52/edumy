import { Component,OnInit} from '@angular/core';
import { ManageService } from './manage.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Router }            from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Manage } from "./manage";

@Component({
  selector: 'datamanagement',
  templateUrl: './datamanagement.component.html'
})
export class DataManagementComponent {

  manage:Manage = new Manage();

  manages:Manage[];


  constructor( private route: ActivatedRoute,
               private location: Location,
               private manageService:ManageService,
               private router: Router){ }

  ngOnInit():void {
    //get the list of student setting and populate the array
    this.getManages();
  }
  getManages(): void {
    this.manageService.getManages().then(values => this.manages = values)
  }

  save():void {
    debugger;
    console.log("manage" +this.manage);
    if(!this.manage.id ){
      this.manageService.create(this.manage)
        .then(res => {
          console.log("created" + res);
          this.manages.push(res);
          this.manage = new Manage();

        });
    } else  {
      this.manageService.update(this.manage)
        .then(res => {
          console.log("created" + res);

          this.getManages();
          this.manage = new Manage();

        });
    }
  }
  update(id:number) {
    this.manageService.getManage(id)
      .then(res => {
        this.manage = res;
      })
  }

  delete(id:number):void {
    this.manageService.delete(id)
      .then(() => {
        console.log("deleted" + id);
        this.getManages();
        this.manage = new Manage();
      })
  }

  cancel():void {
    this.goToManages();
  }
  goToManages():void {
    this.router.navigate(['/datamanagement']);
  }

}
