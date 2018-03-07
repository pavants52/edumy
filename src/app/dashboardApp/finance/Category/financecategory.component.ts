import { Component,OnInit} from '@angular/core';
import { FincategoryService } from './fincategory.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Router }            from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {Fincategory} from "./fincategory";

@Component({
  selector: 'financecategory',
  templateUrl: './financecategory.component.html'
})
export class FinanceCategoryComponent {
  fincategory:Fincategory = new Fincategory();

  fincategorys:Fincategory[];


  constructor( private route: ActivatedRoute,
               private location: Location,
               private fincategoryService:FincategoryService,
               private router: Router){ }

  ngOnInit():void {
    //get the list of student setting and populate the array
    this.getFincategorys();
  }
  getFincategorys(): void {
    this.fincategoryService.getFincategorys().then(values => this.fincategorys = values)
  }

  save():void {
    debugger;
    console.log("fincategory" +this.fincategory);
    if(!this.fincategory.id ){
      this.fincategoryService.create(this.fincategory)
        .then(res => {
          console.log("created" + res);
          this.fincategorys.push(res);
          this.fincategory = new Fincategory();

        });
    } else  {
      this.fincategoryService.update(this.fincategory)
        .then(res => {
          console.log("created" + res);

          this.getFincategorys();
          this.fincategory = new Fincategory();

        });
    }
  }
  update(id:number) {
    this.fincategoryService.getFincategory(id)
      .then(res => {
        this.fincategory = res;
      })
  }

  delete(id:number):void {
    this.fincategoryService.delete(id)
      .then(() => {
        console.log("deleted" + id);
        this.getFincategorys();
        this.fincategory = new Fincategory();
      })
  }

  cancel():void {
    this.goToFincategorys();
  }
  goToFincategorys():void {
    this.router.navigate(['/financecategory']);
  }

}
