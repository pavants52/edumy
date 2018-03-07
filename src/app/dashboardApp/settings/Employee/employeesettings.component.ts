import { Component,OnInit} from '@angular/core';
import { EmployeeSetting } from './employeesetting';
import { EmployeeSettingService } from './employeesetting.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Router }            from '@angular/router';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'employeesettings',
  templateUrl: './employeesettings.component.html'
})
export class EmployeeSettingsComponent implements OnInit{
  //title = 'app works!';
  employeesetting:EmployeeSetting = new EmployeeSetting();

  employeesettings:EmployeeSetting[];

  constructor( private route: ActivatedRoute,
               private location: Location,
               private employeesettingService:EmployeeSettingService,
               private router: Router){ }

  ngOnInit():void {
    //get the list of student setting and populate the array
    this.getEmployeeSettings();
  }
  getEmployeeSettings(): void {
    this.employeesettingService.getEmployeeSettings().then(values => this.employeesettings = values)
  }

  save():void {
    debugger;
    console.log("employeesetting" +this.employeesetting);
    if(!this.employeesetting.id ){
      this.employeesettingService.create(this.employeesetting)
        .then(res => {
          console.log("created" + res);
          this.employeesettings.push(res);
          this.employeesetting = new EmployeeSetting();

        });
    } else  if(this.employeesetting.id ){
      this.employeesettingService.update(this.employeesetting)
        .then(res => {
          console.log("created" + res);
          //this.studentsettings.push(res);
          this.getEmployeeSettings();
          this.employeesetting = new EmployeeSetting();

        });
    }
  }
  update(id:number) {
    this.employeesettingService.getEmployeeSetting(id)
      .then(res => {
        this.employeesetting = res;
      })
  }
  delete(id:number):void {
    this.employeesettingService.delete(id)
      .then(() => {
        console.log("deleted" + id);
        this.getEmployeeSettings();
        this.employeesetting = new EmployeeSetting();
      })
  }



  cancel():void {
    this.goToEmployeeSettings();
  }
  goToEmployeeSettings():void {
    this.router.navigate(['/employeesettings']);
  }
}
