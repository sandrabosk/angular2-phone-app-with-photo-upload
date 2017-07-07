import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhoneListComponent } from './phone-list/phone-list.component';
import { PhoneDetailsComponent } from './phone-details/phone-details.component';
import { NewPhoneComponent } from './new-phone/new-phone.component';


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
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
