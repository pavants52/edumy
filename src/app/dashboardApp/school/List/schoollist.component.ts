import { Component,OnInit } from '@angular/core';
import { SharedService } from '../../../utilityApp/services/shared.service';
import { School } from '../school';
import { SchoolService } from '../school.service';
import 'rxjs/add/operator/map';
@Component({
  selector: 'schoollist',
  templateUrl: './schoollist.component.html',

})
export class SchoolListComponent implements OnInit{
  //title = 'app works!';
  schools:School[];
  constructor(private schoolService: SchoolService) { }

  ngOnInit():void {
	  debugger;
	  this.getSchools();
	}

   getSchools(): void {
	 debugger;
	 this.schoolService.getSchools().then(values =>{
	 this.schools = values})
  }
}
