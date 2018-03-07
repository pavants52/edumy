import { Component,OnInit} from '@angular/core';
import { Batch } from './batch';
import { BatchService } from './batch.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Router }            from '@angular/router';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'batches',
  templateUrl: './batches.component.html'
})
export class BatchesComponent implements OnInit{
  //title = 'app works!';
  batch:Batch = new Batch();

  batches:Batch[];

  constructor( private route: ActivatedRoute,
               private location: Location,
               private batchService:BatchService,
               private router: Router){ }

  ngOnInit():void {
    //get the list of student setting and populate the array
    this.getBatches();
  }
  getBatches(): void {
    this.batchService.getBatches().then(values => this.batches = values)
  }

  save():void {
    debugger;
    console.log("batch" +this.batch);
    if(!this.batch.id ){
      this.batchService.create(this.batch)
        .then(res => {
          console.log("created" + res);
          this.batches.push(res);
          this.batch = new Batch();

        });
    } else  if(this.batch.id ){
      this.batchService.update(this.batch)
        .then(res => {
          console.log("created" + res);
          //this.studentsettings.push(res);
          this.getBatches();
          this.batch = new Batch();

        });
    }
  }
  update(id:number) {
    this.batchService.getBatch(id)
      .then(res => {
        this.batch = res;
      })
  }
  delete(id:number) {
    this.batchService.delete(id)
      .then(res => {
        console.log("deleted" + res);
        this.getBatches();
        this.batch = new Batch();
      })
  }

  cancel():void {
    this.goToBatches();
  }
  goToBatches():void {
    this.router.navigate(['/batches']);
  }
}
