import { Component,OnInit} from '@angular/core';
import { AdditionalService } from './additional.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Router }            from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Additional } from "./additional";

@Component({
  selector: 'additionalfield',
  templateUrl: './additionalfield.component.html'
})
export class AdditionalFieldComponent {
  additional:Additional = new Additional();

  additionals:Additional[];


  constructor( private route: ActivatedRoute,
               private location: Location,
               private additionalService:AdditionalService,
               private router: Router){ }

  ngOnInit():void {
    //get the list of student setting and populate the array
    this.getAdditionals();
  }
  getAdditionals(): void {
    this.additionalService.getAdditionals().then(values => this.additionals = values)
  }

  save():void {
    debugger;
    console.log("additional" +this.additional);
    if(!this.additional.id ){
      this.additionalService.create(this.additional)
        .then(res => {
          console.log("created" + res);
          this.additionals.push(res);
          this.additional = new Additional();

        });
    } else  {
      this.additionalService.update(this.additional)
        .then(res => {
          console.log("created" + res);

          this.getAdditionals();
          this.additional = new Additional();

        });
    }
  }
  update(id:number) {
    this.additionalService.getAdditional(id)
      .then(res => {
        this.additional = res;
      })
  }

  delete(id:number):void {
    this.additionalService.delete(id)
      .then(() => {
        console.log("deleted" + id);
        this.getAdditionals();
        this.additional = new Additional();
      })
  }

  cancel():void {
    this.goToAdditionals();
  }
  goToAdditionals():void {
    this.router.navigate(['/additionalfield']);
  }

}
