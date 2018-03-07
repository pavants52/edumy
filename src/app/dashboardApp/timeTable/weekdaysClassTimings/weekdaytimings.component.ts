import { Component } from '@angular/core';
import { SharedService } from '../../../utilityApp/services/shared.service';


export class Batch {
  id:number;
  name:string;
}

const BATCHES: Batch[] = [
  { id:1, name: "G1 - G2" },
  { id:2, name: "H1 - H2" },
  { id:3, name: "E1 - E2" }

];

@Component({
  selector: 'weekdaytimings',
  templateUrl: './weekdaytimings.component.html'
})
export class WeekdayTimingsComponent {

  batches = BATCHES;
  selectedBatch:Batch;

  email:string = "abc@test.com";

  onSelect(batch:Batch):void {
    this.selectedBatch = batch;
  }

  toggleButton:boolean = false;

}
