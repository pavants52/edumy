import { Component,OnInit} from '@angular/core';
import { IcseService } from './icse.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Router }            from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Icse } from "./icse";

@Component({
  selector: 'icseexam',
  templateUrl: './icseexam.component.html'
})
export class IcseExamComponent {
  icse:Icse = new Icse();

  icses:Icse[];


  constructor( private route: ActivatedRoute,
               private location: Location,
               private icseService:IcseService,
               private router: Router){ }

  ngOnInit():void {
    //get the list of student setting and populate the array
    this.getIcses();
  }
  getIcses(): void {
    this.icseService.getIcses().then(values => this.icses = values)
  }

  save():void {
    debugger;
    console.log("icse" +this.icse);
    if(!this.icse.id ){
      this.icseService.create(this.icse)
        .then(res => {
          console.log("created" + res);
          this.icses.push(res);
          this.icse = new Icse();

        });
    } else  {
      this.icseService.update(this.icse)
        .then(res => {
          console.log("created" + res);

          this.getIcses();
          this.icse = new Icse();

        });
    }
  }
  update(id:number) {
    this.icseService.getIcse(id)
      .then(res => {
        this.icse = res;
      })
  }

  delete(id:number):void {
    this.icseService.delete(id)
      .then(() => {
        console.log("deleted" + id);
        this.getIcses();
        this.icse = new Icse();
      })
  }

  cancel():void {
    this.goToIcses();
  }
  goToIcses():void {
    this.router.navigate(['/icseexam']);
  }

}
