import { Component,OnInit} from '@angular/core';
import { ItemService } from '../itemCategory/item.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Router }            from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Item } from "../itemCategory/item";

@Component({
  selector: 'storeitem',
  templateUrl: './storeitem.component.html'
})
export class StoreItemComponent {

  item:Item = new Item();

  items:Item[];


  constructor( private route: ActivatedRoute,
               private location: Location,
               private itemService:ItemService,
               private router: Router){ }

  ngOnInit():void {
    //get the list of student setting and populate the array
    this.getItems();
  }
  getItems(): void {
    this.itemService.getItems().then(values => this.items = values)
  }

  save():void {
    debugger;
    console.log("item" +this.item);
    if(!this.item.id ){
      this.itemService.create(this.item)
        .then(res => {
          console.log("created" + res);
          this.items.push(res);
          this.item = new Item();

        });
    } else  {
      this.itemService.update(this.item)
        .then(res => {
          console.log("created" + res);

          this.getItems();
          this.item = new Item();

        });
    }
  }
  update(id:number) {
    this.itemService.getItem(id)
      .then(res => {
        this.item = res;
      })
  }

  delete(id:number):void {
    this.itemService.delete(id)
      .then(() => {
        console.log("deleted" + id);
        this.getItems();
        this.item = new Item();
      })
  }


  cancel():void {
    this.goToItems();
  }
  goToItems():void {
    this.router.navigate(['/storeitem']);
  }

}
