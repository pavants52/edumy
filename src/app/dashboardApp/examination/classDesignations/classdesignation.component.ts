import { Component,OnInit} from '@angular/core';
import { DesignationService } from './designation.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Router }            from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Designation } from "./designation";

@Component({
  selector: 'classdesignation',
  templateUrl: './classdesignation.component.html'
})
export class ClassDesignationComponent {
  designation:Designation = new Designation();

  designations:Designation[];


  constructor( private route: ActivatedRoute,
               private location: Location,
               private designationService:DesignationService,
               private router: Router){ }

  ngOnInit():void {
    //get the list of student setting and populate the array
    this.getDesignations();
  }
  getDesignations(): void {
    this.designationService.getDesignations().then(values => this.designations = values)
  }

  save():void {
    debugger;
    console.log("designation" +this.designation);
    if(!this.designation.id ){
      this.designationService.create(this.designation)
        .then(res => {
          console.log("created" + res);
          this.designations.push(res);
          this.designation = new Designation();

        });
    } else  {
      this.designationService.update(this.designation)
        .then(res => {
          console.log("created" + res);
          this.getDesignations();
          this.designation = new Designation();

        });
    }
  }
  update(id:number) {
    this.designationService.getDesignation(id)
      .then(res => {
        this.designation = res;
      })
  }

  delete(id:number):void {
    this.designationService.delete(id)
      .then(() => {
        console.log("deleted" + id);
        this.getDesignations();
        this.designation = new Designation();
      })
  }

  cancel():void {
    this.goToDesignations();
  }
  goToDesignations():void {
    this.router.navigate(['/classdesignation']);
  }

}
