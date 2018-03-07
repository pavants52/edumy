import { Component,OnInit} from '@angular/core';
import { SharedService } from '../../../utilityApp/services/shared.service';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Router }            from '@angular/router';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'deleteemployee',
  templateUrl: './deleteemployee.component.html'
})
export class DeleteEmployeeComponent implements OnInit {
  //title = 'app works!';
  employee:Employee;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private employeeService:EmployeeService,
              private router: Router) { }
  ngOnInit():void {

    this.route.paramMap
      .switchMap((params: ParamMap) => this.employeeService.getEmployee(+params.get('id')))
      .subscribe(employee => {this.employee = employee;});
  }

  delete(model: Employee):void {
    //this.submitted = true;
    console.log(model);
    this.employeeService.delete(model.id)
      .then(() => {
        console.log("deleted" + model);
        this.goToEmployeeList();
      });
  }

  cancel():void {
    this.goToEmployeeList();
  }

  goToEmployeeList():void {
    this.router.navigate(['/employeelist']);
  }


}
