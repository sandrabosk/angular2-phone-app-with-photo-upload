import { Component, OnInit, ElementRef } from '@angular/core';
// import {FileUploader, FileSelectDirective} from 'ng2-file-upload/ng2-file-upload';
import { PhoneService } from '../phone.service';
import { Http, Response } from '@angular/http';


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


 submit() {
   console.log("SUBMITTING FORM")
    let inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#file');
    let form = new FormData();
    form.append('file', inputEl.files.item(0));
      form.append('name', this.newPhone.name);
      form.append('brand', this.newPhone.brand);

      console.log(form);


      // this.uploader.uploadAll();
    return this.http.post(`http://localhost:3000/api/upload/`, form)
      .toPromise()
      .then(apiResponse => apiResponse.json());
          }
  }
