import { Component,OnInit } from '@angular/core';
import { SharedService } from '../../../utilityApp/services/shared.service';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'employeelist',
  templateUrl: './employeelist.component.html',
})
export class EmployeeListComponent implements OnInit{

  employees:Employee[];
  constructor(private employeeService: EmployeeService) { }

  ngOnInit():void {
    this.getEmployees();
  }
  getEmployees(): void {
    this.employeeService.getEmployees().then(values => this.employees = values)
  }
}
