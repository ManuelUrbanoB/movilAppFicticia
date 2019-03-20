import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'info-user', loadChildren: './info-user/info-user.module#InfoUserPageModule' },
  { path: 'info-sub-alertn', loadChildren: './info-sub-alertn/info-sub-alertn.module#InfoSubAlertnPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
