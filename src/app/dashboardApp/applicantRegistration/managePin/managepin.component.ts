import { Component,OnInit} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Router }            from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {Applicant} from "../manageClass/applicant";
import {ApplicantService} from "../manageClass/applicant.service";

@Component({
  selector: 'managepin',
  templateUrl: './managepin.component.html'
})
export class ManagePinComponent {

  applicant:Applicant = new Applicant();

  applicants:Applicant[];


  constructor( private route: ActivatedRoute,
               private location: Location,
               private applicantService:ApplicantService,
               private router: Router){ }

  ngOnInit():void {
    //get the list of student setting and populate the array
    this.getApplicants();
  }
  getApplicants(): void {
    this.applicantService.getApplicants().then(values => this.applicants = values)
  }

  save():void {
    debugger;
    console.log("applicant" +this.applicant);
    if(!this.applicant.id ){
      this.applicantService.create(this.applicant)
        .then(res => {
          console.log("created" + res);
          this.applicants.push(res);
          this.applicant = new Applicant();

        });
    } else  {
      this.applicantService.update(this.applicant)
        .then(res => {
          console.log("created" + res);

          this.getApplicants();
          this.applicant = new Applicant();

        });
    }
  }
  update(id:number) {
    this.applicantService.getApplicant(id)
      .then(res => {
        this.applicant = res;
      })
  }

  delete(id:number):void {
    this.applicantService.delete(id)
      .then(() => {
        console.log("deleted" + id);
        this.getApplicants();
        this.applicant = new Applicant();
      })
  }

  cancel():void {
    this.goToApplicants();
  }
  goToApplicants():void {
    this.router.navigate(['/managepin']);
  }

}
