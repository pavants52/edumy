import { Component,Input } from '@angular/core';
import {FormGroup} from '@angular/forms';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';
import { Router }   from '@angular/router';

@Component({
  selector: 'employee-cm-form',
  templateUrl: './employee-cm-form.component.html'
})
export class EmployeeCmFormComponent {
  @Input() employee:Employee;
  constructor(private router: Router,private employeeService: EmployeeService) { }

  saveEmployee():void {
    debugger;
    console.log("employee" + this.employee);
    if(!this.employee.id) {
      this.employeeService.create(this.employee)
        .then(res => {
          console.log("created" + res);
          this.goToEmployeeList();
          this.employee = res;

        });

    } else {
      this.employeeService.update(this.employee)
        .then(() => {
          console.log("updated" + this.employee);
          this.goToEmployeeList();
        })
    }

  }
  cancel():void {
    this.goToEmployeeList();
  }
  goToEmployeeList():void {
    this.router.navigate(['/employeelist']);
  }
}
