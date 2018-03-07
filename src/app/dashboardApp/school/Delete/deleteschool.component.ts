import { Component,OnInit} from '@angular/core';
import { SharedService } from '../../../utilityApp/services/shared.service';
import { School } from '../school';
import { SchoolService } from '../school.service';

import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Router }            from '@angular/router';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'deleteschool',
   templateUrl: './deleteschool.component.html'
})
export class DeleteSchoolComponent implements OnInit {
  //title = 'app works!';
  school:School;

  constructor(private route: ActivatedRoute,
    private location: Location,
	private schoolService:SchoolService,
	private router: Router) { }
  ngOnInit():void {

   this.route.paramMap
      .switchMap((params: ParamMap) => this.schoolService.getSchool(+params.get('id')))
      .subscribe(school => {this.school = school;});
  }

  delete(model: School):void {
        //this.submitted = true;
       console.log(model);
		this.schoolService.delete(model.id)
      .then(() => {
        console.log("deleted" + model);
		this.goToSchoolList();
      });
    }

	cancel():void {
		this.goToSchoolList();
	}

	goToSchoolList():void {
		this.router.navigate(['/schoollist']);
	}


}
