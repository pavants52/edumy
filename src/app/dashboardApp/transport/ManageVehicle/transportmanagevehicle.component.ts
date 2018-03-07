import { Component,OnInit} from '@angular/core';
import { ManagevehicleService } from './managevehicle.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Router }            from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Managevehicle } from "./managevehicle";

@Component({
  selector: 'transportmanagevehicle',
  templateUrl: './transportmanagevehicle.component.html'
})
export class TransportManageVehicleComponent {

  managevehicle:Managevehicle = new Managevehicle();

  managevehicles:Managevehicle[];

  constructor( private route: ActivatedRoute,
               private location: Location,
               private managevehicleService:ManagevehicleService,
               private router: Router){ }

  ngOnInit():void {
    //get the list of student setting and populate the array
    this.getManagevehicles();
  }
  getManagevehicles(): void {
    this.managevehicleService.getManagevehicles().then(values => this.managevehicles = values)
  }

  save():void {
    debugger;
    console.log("managevehicle" +this.managevehicle);
    if(!this.managevehicle.id ){
      this.managevehicleService.create(this.managevehicle)
        .then(res => {
          console.log("created" + res);
          this.managevehicles.push(res);
          this.managevehicle = new Managevehicle();

        });
    } else  {
      this.managevehicleService.update(this.managevehicle)
        .then(res => {
          console.log("created" + res);

          this.getManagevehicles();
          this.managevehicle = new Managevehicle();

        });
    }
  }
  update(id:number) {
    this.managevehicleService.getManagevehicle(id)
      .then(res => {
        this.managevehicle = res;
      })
  }

  delete(id:number):void {
    this.managevehicleService.delete(id)
      .then(() => {
        console.log("deleted" + id);
        this.getManagevehicles();
        this.managevehicle = new Managevehicle();
      })
  }

  cancel():void {
    this.goToManagevehicles();
  }
  goToManagevehicles():void {
    this.router.navigate(['/transportmanagevehicle']);
  }

}
