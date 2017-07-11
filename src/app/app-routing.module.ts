import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhoneListComponent } from './phone-list/phone-list.component';
import { PhoneDetailsComponent } from './phone-details/phone-details.component';
import { NewPhoneComponent } from './new-phone/new-phone.component';
import { FileUploadComponent } from './file-upload/file-upload.component';


const routes: Routes = [
  {
    path: '',
    component: PhoneListComponent
  },

  {
    path: 'phone/:id',
    component: PhoneDetailsComponent
  },

  {
    path: 'addNew',
    component: NewPhoneComponent
  },
  {
  path: 'upload',
   component: FileUploadComponent
 }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
