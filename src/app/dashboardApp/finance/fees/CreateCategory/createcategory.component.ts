import { Component,OnInit} from '@angular/core';
import { CreatecatService } from './createcat.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Router }            from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {Createcat} from "./createcat";

@Component({
  selector: 'createcategory',
  templateUrl: './createcategory.component.html'
})
export class CreateCategoryComponent {
  createcat:Createcat = new Createcat();

  createcats:Createcat[];


  constructor( private route: ActivatedRoute,
               private location: Location,
               private createcatService:CreatecatService,
               private router: Router){ }

  ngOnInit():void {
    //get the list of student setting and populate the array
    this.getCreatecats();
  }
  getCreatecats(): void {
    this.createcatService.getCreatecats().then(values => this.createcats = values)
  }

  save():void {
    debugger;
    console.log("createcat" +this.createcat);
    if(!this.createcat.id ){
      this.createcatService.create(this.createcat)
        .then(res => {
          console.log("created" + res);
          this.createcats.push(res);
          this.createcat = new Createcat();

        });
    } else  {
      this.createcatService.update(this.createcat)
        .then(res => {
          console.log("created" + res);

          this.getCreatecats();
          this.createcat = new Createcat();

        });
    }
  }
  update(id:number) {
    this.createcatService.getCreatecat(id)
      .then(res => {
        this.createcat = res;
      })
  }

  delete(id:number):void {
    this.createcatService.delete(id)
      .then(() => {
        console.log("deleted" + id);
        this.getCreatecats();
        this.createcat = new Createcat();
      })
  }

  cancel():void {
    this.goToCreatecats();
  }
  goToCreatecats():void {
    this.router.navigate(['/createcategory']);
  }

}
