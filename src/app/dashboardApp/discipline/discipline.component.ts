import { Component,OnInit} from '@angular/core';
import { DiscService } from './disc.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Router }            from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Disc } from "./disc";

@Component({
  selector: 'discipline',
  templateUrl: './discipline.component.html'
})
export class DisciplineComponent {

  disc:Disc = new Disc();

  discs:Disc[];


  constructor( private route: ActivatedRoute,
               private location: Location,
               private discService:DiscService,
               private router: Router){ }

  ngOnInit():void {
    //get the list of student setting and populate the array
    this.getDiscs();
  }
  getDiscs(): void {
    this.discService.getDiscs().then(values => this.discs = values)
  }

  save():void {
    debugger;
    console.log("disc" +this.disc);
    if(!this.disc.id ){
      this.discService.create(this.disc)
        .then(res => {
          console.log("created" + res);
          this.discs.push(res);
          this.disc = new Disc();

        });
    } else  {
      this.discService.update(this.disc)
        .then(res => {
          console.log("created" + res);

          this.getDiscs();
          this.disc = new Disc();

        });
    }
  }
  update(id:number) {
    this.discService.getDisc(id)
      .then(res => {
        this.disc = res;
      })
  }

  delete(id:number):void {
    this.discService.delete(id)
      .then(() => {
        console.log("deleted" + id);
        this.getDiscs();
        this.disc = new Disc();
      })
  }

  cancel():void {
    this.goToDiscs();
  }
  goToDiscs():void {
    this.router.navigate(['/discipline']);
  }

}
