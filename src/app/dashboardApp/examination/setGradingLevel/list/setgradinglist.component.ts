import { Component,OnInit } from '@angular/core';
import { SharedService } from '../../../../utilityApp/services/shared.service';
import { Setgrading } from '../setgrading';
import { SetgradingService } from '../setgrading.service';

export class Batch {
  id:number;
  name:string;
}

const BATCHES: Batch[] = [
  { id:1, name: "Common" },
  { id:2, name: "H1-H2" },
  { id:3, name: "G1-G2" }

];

@Component({
  selector: 'setgradinglist',
  templateUrl: './setgradinglist.component.html',
})
export class SetGradingListComponent implements OnInit{

  batches = BATCHES;
  selectedBatch:Batch;

  email:string = "abc@test.com";

  onSelect(batch:Batch):void {
    this.selectedBatch = batch;
  }

  toggleButton:boolean = false;

  setgradings:Setgrading[];
  constructor(private setgradingService: SetgradingService) { }

  ngOnInit():void {
    this.getSetgradings();
  }
  getSetgradings(): void {
    this.setgradingService.getSetgradings().then(values => this.setgradings = values)
  }
}
