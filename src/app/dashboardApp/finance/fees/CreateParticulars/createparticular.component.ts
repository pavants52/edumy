import { Component,OnInit} from '@angular/core';
import { ParticularService } from './particular.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Router }            from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Particular } from "./particular";


@Component({
  selector: 'createparticular',
  templateUrl: './createparticular.component.html'
})
export class CreateParticularComponent {

  particular:Particular = new Particular();

  particulars:Particular[];


  constructor( private route: ActivatedRoute,
               private location: Location,
               private particularService:ParticularService,
               private router: Router){ }

  ngOnInit():void {
    //get the list of student setting and populate the array
    this.getParticulars();
  }
  getParticulars(): void {
    this.particularService.getParticulars().then(values => this.particulars = values)
  }

  save():void {
    debugger;
    console.log("particular" +this.particular);
    if(!this.particular.id ){
      this.particularService.create(this.particular)
        .then(res => {
          console.log("created" + res);
          this.particulars.push(res);
          this.particular = new Particular();

        });
    } else  {
      this.particularService.update(this.particular)
        .then(res => {
          console.log("created" + res);

          this.getParticulars();
          this.particular = new Particular();

        });
    }
  }
  update(id:number) {
    this.particularService.getParticular(id)
      .then(res => {
        this.particular = res;
      })
  }

  delete(id:number):void {
    this.particularService.delete(id)
      .then(() => {
        console.log("deleted" + id);
        this.getParticulars();
        this.particular = new Particular();
      })
  }

  cancel():void {
    this.goToParticulars();
  }
  goToParticulars():void {
    this.router.navigate(['/createparticular']);
  }

}
