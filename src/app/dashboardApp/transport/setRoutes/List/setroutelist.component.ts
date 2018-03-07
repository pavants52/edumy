import { Component,OnInit } from '@angular/core';
import { SharedService } from '../../../../utilityApp/services/shared.service';
import { Setroute } from '../setroute';
import { RouteService } from '../route.service';
import 'rxjs/add/operator/map';
@Component({
  selector: 'setroutelist',
  templateUrl: './setroutelist.component.html',

})
export class SetRouteListComponent implements OnInit{
  //title = 'app works!';
  setroutes:Setroute[];
  constructor(private routeService: RouteService) { }

  ngOnInit():void {
    debugger;
    this.getSetroutes();
  }

  getSetroutes(): void {
    debugger;
    this.routeService.getSetroutes().then(values =>{
      this.setroutes = values})
  }
}
