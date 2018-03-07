import { Component,OnInit} from '@angular/core';
import { BookaddService } from './bookadd.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Router }            from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Bookadd } from "./bookadd";

@Component({
  selector: 'bookadditional',
  templateUrl: './bookadditional.component.html'
})
export class BookAdditionalComponent {
  bookadd:Bookadd = new Bookadd();

  bookadds:Bookadd[];


  constructor( private route: ActivatedRoute,
               private location: Location,
               private bookaddService:BookaddService,
               private router: Router){ }

  ngOnInit():void {
    //get the list of student setting and populate the array
    this.getBookadds();
  }
  getBookadds(): void {
    this.bookaddService.getBookadds().then(values => this.bookadds = values)
  }

  save():void {
    debugger;
    console.log("bookadd" +this.bookadd);
    if(!this.bookadd.id ){
      this.bookaddService.create(this.bookadd)
        .then(res => {
          console.log("created" + res);
          this.bookadds.push(res);
          this.bookadd = new Bookadd();

        });
    } else  {
      this.bookaddService.update(this.bookadd)
        .then(res => {
          console.log("created" + res);

          this.getBookadds();
          this.bookadd = new Bookadd();

        });
    }
  }
  update(id:number) {
    this.bookaddService.getBookadd(id)
      .then(res => {
        this.bookadd = res;
      })
  }

  delete(id:number):void {
    this.bookaddService.delete(id)
      .then(() => {
        console.log("deleted" + id);
        this.getBookadds();
        this.bookadd = new Bookadd();
      })
  }

  cancel():void {
    this.goToBookadds();
  }
  goToBookadds():void {
    this.router.navigate(['/bookadditional']);
  }

}
