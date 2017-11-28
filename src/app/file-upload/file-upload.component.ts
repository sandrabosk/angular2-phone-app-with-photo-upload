import { Component, OnInit, ElementRef } from '@angular/core';
// import {FileUploader, FileSelectDirective} from 'ng2-file-upload/ng2-file-upload';
import { PhoneService } from '../phone.service';
import { Http, Response } from '@angular/http';

//ElementRef - allows you to select items in body directly, example some div


@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  newPhone = {
     name: '',
     brand: '',
     specs: []
   };

   feedback: string;


constructor(
  private http: Http,
   private el: ElementRef){}

ngOnInit() {}

//here we are creating form outside the angular and using it inside the angular
 submit() {
   console.log("SUBMITTING FORM")
    let inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#file'); //#file==> give me the element with the id file
    let form = new FormData(); //creatingan empty form
    form.append('file', inputEl.files.item(0)); //attaching the elements
      form.append('name', this.newPhone.name);
      form.append('brand', this.newPhone.brand);

      console.log(form);
                                              // this is the route from our express app ('/api/upload')  
                                              //  |
      // this.uploader.uploadAll();               |
    return this.http.post(`http://localhost:3000/api/upload/`, form)
      .toPromise()
      .then(apiResponse => apiResponse.json());
          }
  }
