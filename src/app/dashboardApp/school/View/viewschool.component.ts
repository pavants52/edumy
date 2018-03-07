import { Component,OnInit} from '@angular/core';
import { SharedService } from '../../../utilityApp/services/shared.service';
import { School } from '../school';
import { SchoolService } from '../school.service';
import {ReactiveFormsModule, FormGroup, FormBuilder} from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Router }            from '@angular/router';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'viewschool',
  templateUrl: './viewschool.component.html'

})
export class ViewSchoolComponent implements OnInit {
  //title = 'app works!';
  school:School;
  myForm: FormGroup;
  constructor(private route: ActivatedRoute,
              private location: Location,
              private schoolService:SchoolService,
              private router: Router) { }
  ngOnInit():void {


    this.route.paramMap
      .switchMap((params: ParamMap) => this.schoolService.getSchool(+params.get('id')))
      .subscribe(school => {this.school = school; });


  }





}
