import { Component,OnInit } from '@angular/core';
import { ClassModel } from './classmodel';
import { ClassService } from './class.service';
@Component({
  selector: 'classes',
  templateUrl: './classes.component.html',

})
export class ClassesComponent implements OnInit{
  //title = 'app works!';
  classmodels:ClassModel[];
  constructor(private classService: ClassService) { }

  ngOnInit():void {
    this.getClassModels();
  }
  getClassModels(): void {
    this.classService.getClassModels().then(values => this.classmodels = values)
  }

}
