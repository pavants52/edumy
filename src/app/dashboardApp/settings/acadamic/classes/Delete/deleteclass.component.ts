import { Component,OnInit} from '@angular/core';
import { SharedService } from '../../../../../utilityApp/services/shared.service';
import { ClassModel } from '../classmodel';
import { ClassService } from '../class.service';

import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Router }            from '@angular/router';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'deleteclass',
  templateUrl: './deleteclass.component.html'
})
export class DeleteClassComponent implements OnInit {
  //title = 'app works!';
  classmodel:ClassModel;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private classService:ClassService,
              private router: Router) { }
  ngOnInit():void {

    this.route.paramMap
      .switchMap((params: ParamMap) => this.classService.getClassModel(+params.get('id')))
      .subscribe(classmodel => {this.classmodel = classmodel;});
  }

  delete(model: ClassModel):void {
    //this.submitted = true;
    console.log(model);
    this.classService.delete(model.id)
      .then(() => {
        console.log("deleted" + model);
        this.goToClass();
      });
  }

  cancel():void {
    this.goToClass();
  }

  goToClass():void {
    this.router.navigate(['/acadamicsettings/classes']);
  }


}
