import { Component,OnInit} from '@angular/core';
import { SharedService } from '../../../../utilityApp/services/shared.service';
import { Setroute } from '../setroute';
import { RouteService } from '../route.service';
import {ReactiveFormsModule, FormGroup, FormBuilder} from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Router }            from '@angular/router';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'editsetroute',
  template:`
  <div class="wrapper wrapper-content animated fadeInRight setroute-menu">
    <div class="row">
      <form [formGroup]="myForm" novalidate (ngSubmit)="save(myForm.value, myForm.valid)">
		 <input type="hidden" name="id" class="form-control" formControlName="id">
		<setroute-cm-form [formGroup]="myForm"> </setroute-cm-form>
           
        </form>
    </div>
</div>
  `
})
export class EditSetRouteComponent implements OnInit {
  //title = 'app works!';
  setroute:Setroute;
  myForm: FormGroup;
  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private location: Location,
              private routeService:RouteService,
              private router: Router) { }
  ngOnInit():void {
    this.myForm = this.fb.group({
      id:[''],
      destination:['a'],
      cost:['b'],
      route:['c']
    });

    this.route.paramMap
      .switchMap((params: ParamMap) => this.routeService.getSetroute(+params.get('id')))
      .subscribe(setroute => {this.setroute = setroute;
        (<FormGroup>this.myForm)
          .setValue(this.setroute, { onlySelf: true });
      });


  }

  save(model: Setroute):void {
    //this.submitted = true;
    debugger;
    console.log(model);

    this.routeService.update(model)
      .then(() => {
        console.log("updated" + model);
        this.goToSetRouteList();
      });
  }

  goToSetRouteList():void {
    this.router.navigate(['/setroutelist']);
  }
  cancel():void {
    this.goToSetRouteList();
  }

}
