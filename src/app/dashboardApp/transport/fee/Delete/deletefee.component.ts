import { Component,OnInit} from '@angular/core';
import { SharedService } from '../../../../utilityApp/services/shared.service';
import { Fee } from '../fee';
import { FeeService } from '../fee.service';

import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Router }            from '@angular/router';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'deletefee',
  templateUrl: './deletefee.component.html'
})
export class DeleteFeeComponent implements OnInit {
  //title = 'app works!';
  fee:Fee;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private feeService:FeeService,
              private router: Router) { }
  ngOnInit():void {

    this.route.paramMap
      .switchMap((params: ParamMap) => this.feeService.getFee(+params.get('id')))
      .subscribe(fee => {this.fee = fee;});
  }

  delete(model: Fee):void {
    //this.submitted = true;
    console.log(model);
    this.feeService.delete(model.id)
      .then(() => {
        console.log("deleted" + model);
        this.goToFeeList();
      });
  }

  cancel():void {
    this.goToFeeList();
  }

  goToFeeList():void {
    this.router.navigate(['/feelist']);
  }


}
