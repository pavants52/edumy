import { Component } from '@angular/core';
import { SharedService } from '../../../../utilityApp/services/shared.service';


export class Room {
  id:number;
  name:string;
}

const ROOMS: Room[] = [
  { id:1, name: "Gents" },
  { id:2, name: "Ladies" }

];

@Component({
  selector: 'allocationlist',
  templateUrl: './allocationlist.component.html'
})
export class AllocationListComponent {

  rooms = ROOMS;
  selectedRoom: Room;
  submitted:boolean=false;

  email:string ="abc@test.com";

  onSelect(room:Room): void {
    this.selectedRoom = room;
  }
  toggleButton: boolean = false;

  process()
  {
    this.submitted=true;
  }
}
