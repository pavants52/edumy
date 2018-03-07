import { Component,OnInit} from '@angular/core';
import { SharedService } from '../../../utilityApp/services/shared.service';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Router }            from '@angular/router';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'addemployee',
  templateUrl: './editemployee.component.html'
})
export class EditEmployeeComponent implements OnInit{
  //title = 'app works!';
  employee:Employee;
  constructor( private route: ActivatedRoute,
               private location: Location,
               private employeeService:EmployeeService,
               private router: Router){ }

  ngOnInit():void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.employeeService.getEmployee(+params.get('id')))
      .subscribe(employee => {this.employee = employee;});
  }
}
