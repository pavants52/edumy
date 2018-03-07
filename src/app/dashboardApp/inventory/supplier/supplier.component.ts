import { Component,OnInit} from '@angular/core';
import { SupplierService } from './supplier.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Router }            from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Supplier } from "./supplier";

@Component({
  selector: 'supplier',
  templateUrl: './supplier.component.html'
})
export class SupplierComponent {

  supplier:Supplier = new Supplier();

  suppliers:Supplier[];


  constructor( private route: ActivatedRoute,
               private location: Location,
               private supplierService:SupplierService,
               private router: Router){ }

  ngOnInit():void {
    //get the list of student setting and populate the array
    this.getSuppliers();
  }
  getSuppliers(): void {
    this.supplierService.getSuppliers().then(values => this.suppliers = values)
  }

  save():void {
    debugger;
    console.log("supplier" +this.supplier);
    if(!this.supplier.id ){
      this.supplierService.create(this.supplier)
        .then(res => {
          console.log("created" + res);
          this.suppliers.push(res);
          this.supplier = new Supplier();

        });
    } else  {
      this.supplierService.update(this.supplier)
        .then(res => {
          console.log("created" + res);

          this.getSuppliers();
          this.supplier = new Supplier();

        });
    }
  }
  update(id:number) {
    this.supplierService.getSupplier(id)
      .then(res => {
        this.supplier = res;
      })
  }

  delete(id:number):void {
    this.supplierService.delete(id)
      .then(() => {
        console.log("deleted" + id);
        this.getSuppliers();
        this.supplier = new Supplier();
      })
  }

  cancel():void {
    this.goToSuppliers();
  }
  goToSuppliers():void {
    this.router.navigate(['/supplier']);
  }

}
