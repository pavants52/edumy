import { Component,OnInit } from '@angular/core';
import { SharedService } from '../../../../utilityApp/services/shared.service';
import { Hostel } from '../hostel';
import { HostelService } from '../hostel.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'hostellist',
  templateUrl: './hostellist.component.html',

})
export class HostelListComponent implements OnInit{
  //title = 'app works!';
  hostels:Hostel[];
  constructor(private hostelService: HostelService) { }

  ngOnInit():void {

    this.getHostels();
  }

  getHostels(): void {

    this.hostelService.getHostels().then(values => this.hostels = values)
  }
}
