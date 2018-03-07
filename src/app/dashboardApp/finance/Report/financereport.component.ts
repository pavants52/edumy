import { Component } from '@angular/core';
import { SharedService } from '../../../utilityApp/services/shared.service';

@Component({
  selector: 'financereport',
  templateUrl: './financereport.component.html'
})
export class FinanceReportComponent {
  //title = 'app works!';
  constructor(private shared:SharedService){
          this.shared.emitTypeBroadcast();
        }

  report = [
    {
      id: 1, particulars: 'Salary Account', expenses: '0', incomes: '30'
    },
    {
      id: 2, particulars: 'Donations', expenses: '0', incomes: '0'
    },
    {
      id: 3, particulars: 'Fees Account', expenses: '0', incomes: '0'
    },
    {
      id: 4, particulars: 'Applicant Registration Account', expenses: '0', incomes: '0'
    },
    {
      id: 5, particulars: 'Instant Fee Account', expenses: '0', incomes: '0'
    }
  ];


}
