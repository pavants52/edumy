import { Component } from '@angular/core';
import { SharedService } from '../../../../../utilityApp/services/shared.service';

import {Batchfee} from "../batchfee";
import {BatchfeeService} from "../batchfee.service";

export class Batch {
  id:number;
  name:string;
}

const BATCHES: Batch[] = [
  { id:1, name: "H1" },
  { id:2, name: "H2" },
  { id:3, name: "H3" }

];

@Component({
  selector: 'view',
  templateUrl: './view.component.html'
})
export class ViewComponent {

  batches = BATCHES;
  selectedBatch:Batch;

  email:string = "abc@test.com";

  onSelect(batch:Batch):void {
    this.selectedBatch = batch;
  }

  toggleButton:boolean = false;

  batchfees:Batchfee[];
  constructor(private batchfeeService: BatchfeeService) { }

  ngOnInit():void {
    this.getBatchfees();
  }
  getBatchfees(): void {
    this.batchfeeService.getBatchfees().then(values => this.batchfees = values)
  }
}
