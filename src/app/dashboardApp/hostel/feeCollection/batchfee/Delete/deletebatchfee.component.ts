import { Component,OnInit} from '@angular/core';
import { SharedService } from '../../../../../utilityApp/services/shared.service';
import { Batchfee } from '../batchfee';
import { BatchfeeService } from '../batchfee.service';

import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Router }            from '@angular/router';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'deletebatchfee',
  templateUrl: './deletebatchfee.component.html'
})

export class DeleteBatchFeeComponent implements OnInit {
  //title = 'app works!';
  batchfee:Batchfee;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private batchfeeService:BatchfeeService,
              private router: Router) { }
  ngOnInit():void {

    this.route.paramMap
      .switchMap((params: ParamMap) => this.batchfeeService.getBatchfee(+params.get('id')))
      .subscribe(batchfee => {this.batchfee = batchfee;});
  }

  delete(model: Batchfee):void {
    //this.submitted = true;
    console.log(model);
    this.batchfeeService.delete(model.id)
      .then(() => {
        console.log("deleted" + model);
        this.goToView();
      });
  }

  cancel():void {
    this.goToView();
  }

  goToView():void {
    this.router.navigate(['/hostelfeecollection/view']);
  }


}
