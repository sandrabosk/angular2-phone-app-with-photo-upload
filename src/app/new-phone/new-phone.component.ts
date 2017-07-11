import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PhoneService } from '../phone.service';


@Component({
  selector: 'app-new-phone',
  templateUrl: './new-phone.component.html',
  styleUrls: ['./new-phone.component.css']
})
export class NewPhoneComponent implements OnInit {

  newPhone: Object;
  brand: String;
  name: String;
  specs: Array<String>;
  image: String;

  constructor(
    private myRoute: ActivatedRoute,
    private myPhoneService: PhoneService,
    private myNavigator: Router
  ) { };

  ngOnInit() {
      this.myRoute.params
        .subscribe((params) => this.newPhone = {} );
    }

  createNewPhone(formData){
    console.log(formData);
    this.brand = formData.form.controls.brand._value;
    this.name = formData.form.controls.name._value;
    this.image = formData.form.controls.image._value;
    this.specs = formData.form.controls.specs._value.split(",");
    this.sendNewPhoneToApi();
  }

  sendNewPhoneToApi(){
    this.newPhone = {
      brand: this.brand,
      name: this.name,
      specs: this.specs,
      image: this.image
    }
    this.myPhoneService.createNew(this.newPhone).then(()=>{
      this.brand = "";
      this.name = "";
      this.specs = [];
      this.image = "";
      this.newPhone = {};
    });
  }

}
