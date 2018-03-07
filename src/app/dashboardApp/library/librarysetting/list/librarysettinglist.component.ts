import { Component,OnInit } from '@angular/core';
import { SharedService } from '../../../../utilityApp/services/shared.service';
import { Librarysetting } from '../librarysetting';
import { LibrarysettingService } from '../librarysetting.service';

export class Batch {
  id:number;
  name:string;
}

const BATCHES: Batch[] = [
  { id:1, name: "Test1" },
  { id:2, name: "Test2" },
  { id:3, name: "Test3" }

];

@Component({
  selector: 'librarysettinglist',
  templateUrl: './librarysettinglist.component.html',
})
export class LibrarySettingListComponent implements OnInit{

  batches = BATCHES;
  selectedBatch:Batch;

  email:string = "abc@test.com";

  onSelect(batch:Batch):void {
    this.selectedBatch = batch;
  }

  toggleButton:boolean = false;

  librarysettings:Librarysetting[];
  constructor(private librarysettingService: LibrarysettingService) { }

  ngOnInit():void {
    this.getLibrarysettings();
  }
  getLibrarysettings(): void {
    this.librarysettingService.getLibrarysettings().then(values => this.librarysettings = values)
  }
}
