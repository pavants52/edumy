import { Component,OnInit} from '@angular/core';
import { GenerateService } from './generate.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Router }            from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Generate } from "./generate";


@Component({
  selector: 'generatefine',
  templateUrl: './generatefine.component.html'
})
export class GenerateFineComponent {

  generate:Generate = new Generate();

  generates:Generate[];


  constructor( private route: ActivatedRoute,
               private location: Location,
               private generateService:GenerateService,
               private router: Router){ }

  ngOnInit():void {
    //get the list of student setting and populate the array
    this.getGenerates();
  }
  getGenerates(): void {
    this.generateService.getGenerates().then(values => this.generates = values)
  }

  save():void {
    debugger;
    console.log("generate" +this.generate);
    if(!this.generate.id ){
      this.generateService.create(this.generate)
        .then(res => {
          console.log("created" + res);
          this.generates.push(res);
          this.generate = new Generate();

        });
    } else  {
      this.generateService.update(this.generate)
        .then(res => {
          console.log("created" + res);

          this.getGenerates();
          this.generate = new Generate();

        });
    }
  }
  update(id:number) {
    this.generateService.getGenerate(id)
      .then(res => {
        this.generate = res;
      })
  }

  delete(id:number):void {
    this.generateService.delete(id)
      .then(() => {
        console.log("deleted" + id);
        this.getGenerates();
        this.generate = new Generate();
      })
  }

  cancel():void {
    this.goToGenerates();
  }
  goToGenerates():void {
    this.router.navigate(['/generatefine']);
  }

}
