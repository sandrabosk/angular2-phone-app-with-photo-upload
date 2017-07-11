import { Component, OnInit } from '@angular/core';

import { PhoneService } from '../phone.service';


@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css']
})
export class PhoneListComponent implements OnInit {

  phones = [];
  errorMessage: string = '';

  constructor(private myPhoneService: PhoneService) { }

  ngOnInit() {
    this.myPhoneService.getList()
      .then((phonesList) => {
        this.phones = phonesList;
      })
      .catch((err) => {
        this.errorMessage = 'There was an error. Try again later.';
      });
      // .then(()=> {
      //   this.phones.forEach((phone)=>{
      //     console.log(phone.image);
      //     if(phone.image.indexOf("http")!==0){
      //
      //       phone.image = "http://localhost:3000"+phone.image
      //     }
          // phone.image = this._DomSanitizater.bypassSecurityTrustUrl(phone.image);
          // console.log(phone.image);
          // console.log('');
        // });
      // });
  }

}
