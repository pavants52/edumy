import { Component,OnInit} from '@angular/core';
import { SharedService } from '../../../../../utilityApp/services/shared.service';
import { Subject } from '../subject';
import { SubjectService } from '../subject.service';

import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Router }            from '@angular/router';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'deletesubject',
  templateUrl: './deletesubject.component.html'
})
export class DeleteSubjectComponent implements OnInit {
  //title = 'app works!';
  subject:Subject;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private subjectService:SubjectService,
              private router: Router) { }
  ngOnInit():void {

    this.route.paramMap
      .switchMap((params: ParamMap) => this.subjectService.getSubject(+params.get('id')))
      .subscribe(subject => {this.subject = subject;});
  }

  delete(model: Subject):void {
    //this.submitted = true;
    console.log(model);
    this.subjectService.delete(model.id)
      .then(() => {
        console.log("deleted" + model);
        this.goToClass();
      });
  }

  cancel():void {
    this.goToClass();
  }

  goToClass():void {
    this.router.navigate(['/acadamicsettings/subjects']);
  }


}
