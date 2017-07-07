import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PhoneService } from '../phone.service';

@Component({
  selector: 'app-phone-details',
  templateUrl: './phone-details.component.html',
  styleUrls: ['./phone-details.component.css']
})
export class PhoneDetailsComponent implements OnInit {

  phone: Object;
  errorMessage: string = '';

  constructor(
    private myRoute: ActivatedRoute,
    private myPhoneService: PhoneService,
    private myNavigator: Router
  ) { }

  ngOnInit() {
    this.myRoute.params.subscribe((params) => {
      this.getPhoneDetails(params['id']);
    });
  }

  getPhoneDetails(id) {
    this.myPhoneService.get(id)
      .then((thePhoneDetails) => {
        this.phone = thePhoneDetails;
      })
      .catch((err) => {
        this.errorMessage = 'Could not retrieve phone details. Try again later.';
      });
  }

  deletePhone() {
    if (!window.confirm('Are you sure?')) {
      return;
    }

    this.myPhoneService.remove(this.phone['_id'])
      .then(() => {
        this.myNavigator.navigate(['/']);
      })
      .catch((err) => {
        this.errorMessage = 'Could not retrieve phone details. Try again later.';
      });
  }

}
