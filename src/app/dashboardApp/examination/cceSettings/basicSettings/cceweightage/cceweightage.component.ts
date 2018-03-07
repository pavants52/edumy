import { Component,OnInit} from '@angular/core';
import { CceService } from '../cce.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Router }            from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Cce } from "../cce";

@Component({
  selector: 'cceweightage',
  templateUrl: './cceweightage.component.html'
})
export class CceWeightageComponent {

  cce:Cce = new Cce();

  cces:Cce[];


  constructor( private route: ActivatedRoute,
               private location: Location,
               private cceService:CceService,
               private router: Router){ }

  ngOnInit():void {
    //get the list of student setting and populate the array
    this.getCces();
  }
  getCces(): void {
    this.cceService.getCces().then(values => this.cces = values)
  }

  save():void {
    debugger;
    console.log("cce" +this.cce);
    if(!this.cce.id ){
      this.cceService.create(this.cce)
        .then(res => {
          console.log("created" + res);
          this.cces.push(res);
          this.cce = new Cce();

        });
    } else  {
      this.cceService.update(this.cce)
        .then(res => {
          console.log("created" + res);

          this.getCces();
          this.cce = new Cce();

        });
    }
  }
  update(id:number) {
    this.cceService.getCce(id)
      .then(res => {
        this.cce = res;
      })
  }

  delete(id:number):void {
    this.cceService.delete(id)
      .then(() => {
        console.log("deleted" + id);
        this.getCces();
        this.cce = new Cce();
      })
  }

  cancel():void {
    this.goToCces();
  }
  goToCces():void {
    this.router.navigate(['/cceweightage']);
  }

}
