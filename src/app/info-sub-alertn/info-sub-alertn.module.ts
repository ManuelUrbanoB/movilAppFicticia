import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InfoSubAlertnPage } from './info-sub-alertn.page';
import { HttpClientModule } from '@angular/common/http';
import { UserServiceService } from '../user-service.service';

const routes: Routes = [
  {
    path: '',
    component: InfoSubAlertnPage
  }
];

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  providers : [
    UserServiceService
  ],
  declarations: [InfoSubAlertnPage]
})
export class InfoSubAlertnPageModule {}
