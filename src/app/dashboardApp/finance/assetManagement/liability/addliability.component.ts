import { Component,OnInit} from '@angular/core';
import { LiabilityService } from './liability.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Router }            from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Liability } from "./liability";

@Component({
  selector: 'addliability',
  templateUrl: './addliability.component.html'
})
export class AddLiabilityComponent {

  liability:Liability = new Liability();

  liabilitys:Liability[];


  constructor( private route: ActivatedRoute,
               private location: Location,
               private liabilityService:LiabilityService,
               private router: Router){ }

  ngOnInit():void {
    //get the list of student setting and populate the array
    this.getLiabilitys();
  }
  getLiabilitys(): void {
    this.liabilityService.getLiabilitys().then(values => this.liabilitys = values)
  }

  save():void {
    debugger;
    console.log("liability" +this.liability);
    if(!this.liability.id ){
      this.liabilityService.create(this.liability)
        .then(res => {
          console.log("created" + res);
          this.liabilitys.push(res);
          this.liability = new Liability();

        });
    } else  {
      this.liabilityService.update(this.liability)
        .then(res => {
          console.log("created" + res);

          this.getLiabilitys();
          this.liability = new Liability();

        });
    }
  }
  update(id:number) {
    this.liabilityService.getLiability(id)
      .then(res => {
        this.liability = res;
      })
  }

  delete(id:number):void {
    this.liabilityService.delete(id)
      .then(() => {
        console.log("deleted" + id);
        this.getLiabilitys();
        this.liability = new Liability();
      })
  }

  cancel():void {
    this.goToLiabilitys();
  }
  goToLiabilitys():void {
    this.router.navigate(['/addliability']);
  }

}
