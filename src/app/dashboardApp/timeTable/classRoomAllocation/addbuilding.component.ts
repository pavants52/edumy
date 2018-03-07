import { Component,OnInit} from '@angular/core';
import { BuildingService } from './building.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Router }            from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Building } from "./building";

@Component({
  selector: 'addbuilding',
  templateUrl: './addbuilding.component.html'
})
export class AddBuildingComponent {

  building:Building = new Building();

  buildings:Building[];


  constructor( private route: ActivatedRoute,
               private location: Location,
               private buildingService:BuildingService,
               private router: Router){ }

  ngOnInit():void {
    //get the list of student setting and populate the array
    this.getBuildings();
  }
  getBuildings(): void {
    this.buildingService.getBuildings().then(values => this.buildings = values)
  }

  save():void {
    debugger;
    console.log("building" +this.building);
    if(!this.building.id ){
      this.buildingService.create(this.building)
        .then(res => {
          console.log("created" + res);
          this.buildings.push(res);
          this.building = new Building();

        });
    } else  {
      this.buildingService.update(this.building)
        .then(res => {
          console.log("created" + res);

          this.getBuildings();
          this.building = new Building();

        });
    }
  }
  update(id:number) {
    this.buildingService.getBuilding(id)
      .then(res => {
        this.building = res;
      })
  }

  delete(id:number):void {
    this.buildingService.delete(id)
      .then(() => {
        console.log("deleted" + id);
        this.getBuildings();
        this.building = new Building();
      })
  }

  cancel():void {
    this.goToBuildings();
  }
  goToBuildings():void {
    this.router.navigate(['/addbuilding']);
  }

}
