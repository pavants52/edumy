import { Component,OnInit} from '@angular/core';
import { SharedService } from '../../../../../utilityApp/services/shared.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Router }            from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {BatchfeeService} from "../batchfee.service";
import {Batchfee} from "../batchfee";

@Component({
  selector: 'batchfeeedit',
  templateUrl: './batchfeeedit.component.html'
})
export class BatchFeeEditComponent implements OnInit{
  //title = 'app works!';
  batchfee:Batchfee;
  constructor( private route: ActivatedRoute,
               private location: Location,
               private batchfeeService:BatchfeeService,
               private router: Router){ }

  ngOnInit():void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.batchfeeService.getBatchfee(+params.get('id')))
      .subscribe(batchfee => {this.batchfee = batchfee;});
  }
}
