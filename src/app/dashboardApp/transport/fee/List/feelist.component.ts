import { Component,OnInit } from '@angular/core';
import { SharedService } from '../../../../utilityApp/services/shared.service';
import { Fee } from '../fee';
import { FeeService } from '../fee.service';
import 'rxjs/add/operator/map';
@Component({
  selector: 'feelist',
  templateUrl: './feelist.component.html',

})
export class FeeListComponent implements OnInit{
  //title = 'app works!';
  fees:Fee[];
  constructor(private feeService: FeeService) { }

  ngOnInit():void {

    this.getFees();
  }

  getFees(): void {

    this.feeService.getFees().then(values => this.fees = values)

  }
}
