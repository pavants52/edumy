import { Component,OnInit} from '@angular/core';
import { FormativeService } from './formative.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Router }            from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Formative } from "./formative";

@Component({
  selector: 'formativeassessment',
  templateUrl: './formativeassessment.component.html'
})
export class FormativeAssessmentComponent {

  formative:Formative = new Formative();

  formatives:Formative[];


  constructor( private route: ActivatedRoute,
               private location: Location,
               private formativeService:FormativeService,
               private router: Router){ }

  ngOnInit():void {
    //get the list of student setting and populate the array
    this.getFormatives();
  }
  getFormatives(): void {
    this.formativeService.getFormatives().then(values => this.formatives = values)
  }

  save():void {
    debugger;
    console.log("formative" +this.formative);
    if(!this.formative.id ){
      this.formativeService.create(this.formative)
        .then(res => {
          console.log("created" + res);
          this.formatives.push(res);
          this.formative = new Formative();

        });
    } else  {
      this.formativeService.update(this.formative)
        .then(res => {
          console.log("created" + res);

          this.getFormatives();
          this.formative = new Formative();

        });
    }
  }
  update(id:number) {
    this.formativeService.getFormative(id)
      .then(res => {
        this.formative = res;
      })
  }

  delete(id:number):void {
    this.formativeService.delete(id)
      .then(() => {
        console.log("deleted" + id);
        this.getFormatives();
        this.formative = new Formative();
      })
  }

  cancel():void {
    this.goToFormatives();
  }
  goToFormatives():void {
    this.router.navigate(['/formativeassessment']);
  }

}
