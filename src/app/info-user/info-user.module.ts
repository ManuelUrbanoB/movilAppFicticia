import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { InfoUserPage } from './info-user.page';

const routes: Routes = [
  {
    path: '',
    component: InfoUserPage
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
  declarations: [InfoUserPage]
})
export class InfoUserPageModule {}
