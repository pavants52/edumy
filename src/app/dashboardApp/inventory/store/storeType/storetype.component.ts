import { Component,OnInit} from '@angular/core';
import { StoreService } from '../storeCategory/store.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Router }            from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Store } from "../storeCategory/store";

@Component({
  selector: 'storetype',
  templateUrl: './storetype.component.html'
})
export class StoreTypeComponent {

  store:Store = new Store();

  stores:Store[];


  constructor( private route: ActivatedRoute,
               private location: Location,
               private storeService:StoreService,
               private router: Router){ }

  ngOnInit():void {
    //get the list of student setting and populate the array
    this.getStores();
  }
  getStores(): void {
    this.storeService.getStores().then(values => this.stores = values)
  }

  save():void {
    debugger;
    console.log("store" +this.store);
    if(!this.store.id ){
      this.storeService.create(this.store)
        .then(res => {
          console.log("created" + res);
          this.stores.push(res);
          this.store = new Store();

        });
    } else  {
      this.storeService.update(this.store)
        .then(res => {
          console.log("created" + res);

          this.getStores();
          this.store = new Store();

        });
    }
  }
  update(id:number) {
    this.storeService.getStore(id)
      .then(res => {
        this.store = res;
      })
  }

  delete(id:number):void {
    this.storeService.delete(id)
      .then(() => {
        console.log("deleted" + id);
        this.getStores();
        this.store = new Store();
      })
  }

  cancel():void {
    this.goToStores();
  }
  goToStores():void {
    this.router.navigate(['/storetype']);
  }

}
