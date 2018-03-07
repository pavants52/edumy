import { Component,OnInit} from '@angular/core';
import { SharedService } from '../../../../utilityApp/services/shared.service';
import { Librarysetting } from '../librarysetting';
import { LibrarysettingService } from '../librarysetting.service';

import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Router }            from '@angular/router';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'deletelibrarysetting',
  templateUrl: './deletelibrarysetting.component.html'
})

export class DeleteLibrarySettingComponent implements OnInit {
  //title = 'app works!';
  librarysetting:Librarysetting;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private librarysettingService:LibrarysettingService,
              private router: Router) { }
  ngOnInit():void {

    this.route.paramMap
      .switchMap((params: ParamMap) => this.librarysettingService.getLibrarysetting(+params.get('id')))
      .subscribe(librarysetting => {this.librarysetting = librarysetting;});
  }

  delete(model: Librarysetting):void {
    //this.submitted = true;
    console.log(model);
    this.librarysettingService.delete(model.id)
      .then(() => {
        console.log("deleted" + model);
        this.goToLibrarysettingList();
      });
  }

  cancel():void {
    this.goToLibrarysettingList();
  }

  goToLibrarysettingList():void {
    this.router.navigate(['/librarysettinglist']);
  }


}
