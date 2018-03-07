import { Component,OnInit} from '@angular/core';
import { StudentSetting } from './studentsetting';
import { StudentSettingService } from './studentsetting.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Router }            from '@angular/router';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'studentsettings',
  templateUrl: './studentsettings.component.html'
})
export class StudentSettingsComponent implements OnInit{
  //title = 'app works!';
  studentsetting:StudentSetting = new StudentSetting();

  studentsettings:StudentSetting[];
  //array of studentsettings

  constructor( private route: ActivatedRoute,
               private location: Location,
               private studentsettingService:StudentSettingService,
               private router: Router){ }

  ngOnInit():void {
    //get the list of student setting and populate the array
    this.getStudentSettings();
  }
  getStudentSettings(): void {
    this.studentsettingService.getStudentSettings().then(values => this.studentsettings = values)
  }

  save():void {
    debugger;
    console.log("studentsetting" +this.studentsetting);
    if(!this.studentsetting.id ){
      this.studentsettingService.create(this.studentsetting)
        .then(res => {
          console.log("created" + res);
          this.studentsettings.push(res);
          this.studentsetting = new StudentSetting();

        });
    } else  {
      this.studentsettingService.update(this.studentsetting)
        .then(res => {
          console.log("created" + res);
          //this.studentsettings.push(res);
          this.getStudentSettings();
          this.studentsetting = new StudentSetting();

        });
    }
  }
  update(id:number) {
  this.studentsettingService.getStudentSetting(id)
    .then(res => {
      this.studentsetting = res;
    })
}

  delete(id:number):void {
    this.studentsettingService.delete(id)
      .then(() => {
        console.log("deleted" + id);
        this.getStudentSettings();
        this.studentsetting = new StudentSetting();
      })
  }

  cancel():void {
    this.goToStudentSettings();
  }
  goToStudentSettings():void {
    this.router.navigate(['/studentsettings']);
  }

}
