import { Component,OnInit} from '@angular/core';
import { PlaceService } from './place.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Router }            from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {Place} from "./place";

@Component({
  selector: 'placement',
  templateUrl: './placement.component.html'
})
export class PlacementComponent {

  place:Place = new Place();

  places:Place[];


  constructor( private route: ActivatedRoute,
               private location: Location,
               private placeService:PlaceService,
               private router: Router){ }

  ngOnInit():void {
    //get the list of student setting and populate the array
    this.getPlaces();
  }
  getPlaces(): void {
    this.placeService.getPlaces().then(values => this.places = values)
  }

  save():void {
    debugger;
    console.log("place" +this.place);
    if(!this.place.id ){
      this.placeService.create(this.place)
        .then(res => {
          console.log("created" + res);
          this.places.push(res);
          this.place = new Place();

        });
    } else  {
      this.placeService.update(this.place)
        .then(res => {
          console.log("created" + res);

          this.getPlaces();
          this.place = new Place();

        });
    }
  }
  update(id:number) {
    this.placeService.getPlace(id)
      .then(res => {
        this.place = res;
      })
  }

  delete(id:number):void {
    this.placeService.delete(id)
      .then(() => {
        console.log("deleted" + id);
        this.getPlaces();
        this.place = new Place();
      })
  }

  cancel():void {
    this.goToPlaces();
  }
  goToPlaces():void {
    this.router.navigate(['/placement']);
  }

}
