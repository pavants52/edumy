import { Component,OnInit} from '@angular/core';
import { WeightageService } from './weightage.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Router }            from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Weightage } from "./weightage";

@Component({
  selector: 'weightagegroup',
  templateUrl: './weightagegroup.component.html'
})
export class WeightageGroupComponent {
  weightage:Weightage = new Weightage();

  weightages:Weightage[];


  constructor( private route: ActivatedRoute,
               private location: Location,
               private weightageService:WeightageService,
               private router: Router){ }

  ngOnInit():void {
    //get the list of student setting and populate the array
    this.getWeightages();
  }
  getWeightages(): void {
    this.weightageService.getWeightages().then(values => this.weightages = values)
  }

  save():void {
    debugger;
    console.log("weightage" +this.weightage);
    if(!this.weightage.id ){
      this.weightageService.create(this.weightage)
        .then(res => {
          console.log("created" + res);
          this.weightages.push(res);
          this.weightage = new Weightage();

        });
    } else  {
      this.weightageService.update(this.weightage)
        .then(res => {
          console.log("created" + res);

          this.getWeightages();
          this.weightage = new Weightage();

        });
    }
  }
  update(id:number) {
    this.weightageService.getWeightage(id)
      .then(res => {
        this.weightage = res;
      })
  }

  delete(id:number):void {
    this.weightageService.delete(id)
      .then(() => {
        console.log("deleted" + id);
        this.getWeightages();
        this.weightage = new Weightage();
      })
  }

  cancel():void {
    this.goToWeightages();
  }
  goToWeightages():void {
    this.router.navigate(['/weightagegroup']);
  }

}
