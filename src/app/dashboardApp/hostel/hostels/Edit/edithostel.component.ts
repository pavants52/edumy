import { Component,OnInit} from '@angular/core';
import { SharedService } from '../../../../utilityApp/services/shared.service';
import { Hostel } from '../hostel';
import { HostelService } from '../hostel.service';
import {ReactiveFormsModule, FormGroup, FormBuilder} from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Router }            from '@angular/router';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'edithostel',
  templateUrl: './edithostel.component.html'
})
export class EditHostelComponent implements OnInit{
  //title = 'app works!';
  hostel:Hostel = new Hostel();
  constructor( private route: ActivatedRoute,
               private location: Location,
               private hostelService:HostelService,
               private router: Router){ }

  ngOnInit():void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.hostelService.getHostel(+params.get('id')))
      .subscribe(hostel => {this.hostel = hostel;});
  }
}
