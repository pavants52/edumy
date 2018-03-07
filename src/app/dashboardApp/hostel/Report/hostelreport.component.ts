import { Component } from '@angular/core';
import { SharedService } from '../../../utilityApp/services/shared.service';


@Component({
  selector: 'hostelreport',
  templateUrl: './hostelreport.component.html'
})
export class HostelReportComponent {



        report = [
          {
            id: 1, name: 'Hostel 1', type: 'Gents', totalRooms: '30', available: '13', occupied: '17', warden: '-'
          },
          {
            id: 2, name: 'Hostel 2', type: 'Gents', totalRooms: '20', available: '13', occupied: '7', warden: '-'
          },
          {
            id: 3, name: 'Hostel 3', type: 'Ladies', totalRooms: '40', available: '10', occupied: '30', warden: '-'
          },
          {
            id: 4, name: 'Hostel 4', type: 'Gents', totalRooms: '35', available: '15', occupied: '20', warden: '-'
          },
          {
            id: 5, name: 'Hostel 5', type: 'Ladies', totalRooms: '28', available: '5', occupied: '23', warden: '-'
          }
        ];


}
