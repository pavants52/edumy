import { Component,OnInit} from '@angular/core';
import { TaskService } from './task.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Router }            from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Task } from "./task";

@Component({
  selector: 'taskmanagement',
  templateUrl: './taskmanagement.component.html'
})
export class TaskManagementComponent {

  task:Task = new Task();

  tasks:Task[];


  constructor( private route: ActivatedRoute,
               private location: Location,
               private taskService:TaskService,
               private router: Router){ }

  ngOnInit():void {
    //get the list of student setting and populate the array
    this.getTasks();
  }
  getTasks(): void {
    this.taskService.getTasks().then(values => this.tasks = values)
  }

  save():void {
    debugger;
    console.log("task" +this.task);
    if(!this.task.id ){
      this.taskService.create(this.task)
        .then(res => {
          console.log("created" + res);
          this.tasks.push(res);
          this.task = new Task();

        });
    } else  {
      this.taskService.update(this.task)
        .then(res => {
          console.log("created" + res);

          this.getTasks();
          this.task = new Task();

        });
    }
  }
  update(id:number) {
    this.taskService.getTask(id)
      .then(res => {
        this.task = res;
      })
  }

  delete(id:number):void {
    this.taskService.delete(id)
      .then(() => {
        console.log("deleted" + id);
        this.getTasks();
        this.task = new Task();
      })
  }

  cancel():void {
    this.goToTasks();
  }
  goToTasks():void {
    this.router.navigate(['/taskmanagement']);
  }

}
