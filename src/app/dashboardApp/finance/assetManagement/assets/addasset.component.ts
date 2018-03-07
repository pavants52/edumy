import { Component,OnInit} from '@angular/core';
import { AssetService } from './asset.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Router }            from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Asset } from "./asset";

@Component({
  selector: 'addasset',
  templateUrl: './addasset.component.html'
})
export class AddAssetComponent {

  asset:Asset = new Asset();

  assets:Asset[];


  constructor( private route: ActivatedRoute,
               private location: Location,
               private assetService:AssetService,
               private router: Router){ }

  ngOnInit():void {
    //get the list of student setting and populate the array
    this.getAssets();
  }
  getAssets(): void {
    this.assetService.getAssets().then(values => this.assets = values)
  }

  save():void {
    debugger;
    console.log("asset" +this.asset);
    if(!this.asset.id ){
      this.assetService.create(this.asset)
        .then(res => {
          console.log("created" + res);
          this.assets.push(res);
          this.asset = new Asset();

        });
    } else  {
      this.assetService.update(this.asset)
        .then(res => {
          console.log("created" + res);

          this.getAssets();
          this.asset = new Asset();

        });
    }
  }
  update(id:number) {
    this.assetService.getAsset(id)
      .then(res => {
        this.asset = res;
      })
  }

  delete(id:number):void {
    this.assetService.delete(id)
      .then(() => {
        console.log("deleted" + id);
        this.getAssets();
        this.asset = new Asset();
      })
  }

  cancel():void {
    this.goToAssets();
  }
  goToAssets():void {
    this.router.navigate(['/addasset']);
  }

}
