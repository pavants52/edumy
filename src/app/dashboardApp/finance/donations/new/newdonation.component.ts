import { Component,OnInit} from '@angular/core';
import { DonationService } from './donation.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Router }            from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Donation } from "./donation";

@Component({
  selector: 'newdonation',
  templateUrl: './newdonation.component.html'
})
export class NewDonationComponent {
  donation:Donation = new Donation();

  donations:Donation[];


  constructor( private route: ActivatedRoute,
               private location: Location,
               private donationService:DonationService,
               private router: Router){ }

  ngOnInit():void {
    //get the list of student setting and populate the array
    this.getDonations();
  }
  getDonations(): void {
    this.donationService.getDonations().then(values => this.donations = values)
  }

  save():void {
    debugger;
    console.log("donation" +this.donation);
    if(!this.donation.id ){
      this.donationService.create(this.donation)
        .then(res => {
          console.log("created" + res);
          this.donations.push(res);
          this.donation = new Donation();

        });
    } else  {
      this.donationService.update(this.donation)
        .then(res => {
          console.log("created" + res);

          this.getDonations();
          this.donation = new Donation();

        });
    }
  }
  update(id:number) {
    this.donationService.getDonation(id)
      .then(res => {
        this.donation = res;
      })
  }

  delete(id:number):void {
    this.donationService.delete(id)
      .then(() => {
        console.log("deleted" + id);
        this.getDonations();
        this.donation = new Donation();
      })
  }

  cancel():void {
    this.goToDonations();
  }
  goToDonations():void {
    this.router.navigate(['/newdonation']);
  }

}
