import { Component,Input } from '@angular/core';
import {FormGroup} from '@angular/forms';
import { Librarysetting } from './librarysetting';
import { LibrarysettingService } from './librarysetting.service';
import { Router }   from '@angular/router';

@Component({
  selector: 'librarysetting-cm-form',
  templateUrl: './librarysetting-cm-form.component.html'
})
export class LibrarySettingCmFormComponent {
  @Input() librarysetting:Librarysetting;
  constructor(private router: Router,private librarysettingService: LibrarysettingService) { }

  saveLibrarysetting():void {
    debugger;
    console.log("librarysetting" + this.librarysetting);
    if(!this.librarysetting.id) {
      this.librarysettingService.create(this.librarysetting)
        .then(res => {
          console.log("created" + res);
          this.goToLibrarysettingList();
          this.librarysetting = res;

        });

    } else {
      this.librarysettingService.update(this.librarysetting)
        .then(() => {
          console.log("updated" + this.librarysetting);
          this.goToLibrarysettingList();
        })
    }

  }
  cancel():void {
    this.goToLibrarysettingList();
  }
  goToLibrarysettingList():void {
    this.router.navigate(['/librarysettinglist']);
  }
}
