import { Component,OnInit} from '@angular/core';
import { SharedService } from '../../../../utilityApp/services/shared.service';
import { Setroute } from '../setroute';
import { ReactiveFormsModule, FormGroup, FormBuilder} from '@angular/forms';
import { Router }            from '@angular/router';
import { RouteService } from '../route.service';

@Component({
  selector: 'addsetroute',
  template:`
  <div class="wrapper wrapper-content animated fadeInRight route-menu">
    <div class="row">
      <form [formGroup]="myForm" novalidate (ngSubmit)="save(myForm.value, myForm.valid)">
		
		<setroute-cm-form [formGroup]="myForm"> </setroute-cm-form>
           
        </form>
    </div>
</div>

  `
})
export class AddSetRouteComponent implements OnInit {
  //title = 'app works!';
  myForm: FormGroup;
  constructor(private fb: FormBuilder,private routeService: RouteService,private router: Router) { }
  ngOnInit():void {
    this.myForm = this.fb.group({
      destination:[''],
      cost:[''],
      route:['']
    });
  }


  save(model: Setroute):void {
    //this.submitted = true;
    debugger;
    console.log(model);

    this.routeService.create(model)
      .then(setroute => {
        console.log("created" + setroute);
        this.goToSetRouteList();
      });
  }
  cancel():void {
    this.goToSetRouteList();
  }
  goToSetRouteList():void {
    this.router.navigate(['/setroutelist']);
  }
}
