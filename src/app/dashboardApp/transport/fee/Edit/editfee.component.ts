import { Component,OnInit} from '@angular/core';
import { SharedService } from '../../../../utilityApp/services/shared.service';
import { Fee } from '../fee';
import { FeeService } from '../fee.service';
import {ReactiveFormsModule, FormGroup, FormBuilder} from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Router }            from '@angular/router';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'editfee',
  templateUrl: './editfee.component.html'
})
export class EditFeeComponent implements OnInit{
  //title = 'app works!';
  fee:Fee = new Fee();
  constructor( private route: ActivatedRoute,
               private location: Location,
               private feeService:FeeService,
               private router: Router){ }

  ngOnInit():void {

    this.route.paramMap
      .switchMap((params: ParamMap) => this.feeService.getFee(+params.get('id')))
      .subscribe(fee => {this.fee = fee;});
  }
}
