import { Component,OnInit} from '@angular/core';
import { SharedService } from '../../../../utilityApp/services/shared.service';
import { Librarysetting } from '../librarysetting';
import { LibrarysettingService } from '../librarysetting.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Router }            from '@angular/router';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'editlibrarysetting',
  templateUrl: './editlibrarysetting.component.html'
})
export class EditLibrarySettingComponent implements OnInit{
  //title = 'app works!';
  librarysetting:Librarysetting;
  constructor( private route: ActivatedRoute,
               private location: Location,
               private librarysettingService:LibrarysettingService,
               private router: Router){ }

  ngOnInit():void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.librarysettingService.getLibrarysetting(+params.get('id')))
      .subscribe(librarysetting => {this.librarysetting = librarysetting;});
  }
}
