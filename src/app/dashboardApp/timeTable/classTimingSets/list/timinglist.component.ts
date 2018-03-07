import { Component,OnInit } from '@angular/core';
import { SharedService } from '../../../../utilityApp/services/shared.service';
import { Timing } from '../timing';
import { TimingService } from '../timing.service';

@Component({
  selector: 'timinglist',
  templateUrl: './timinglist.component.html',
})
export class TimingListComponent implements OnInit{

  timings:Timing[];
  constructor(private timingService: TimingService) { }

  ngOnInit():void {
    this.getTimings();
  }
  getTimings(): void {
    this.timingService.getTimings().then(values => this.timings = values)
  }
}
