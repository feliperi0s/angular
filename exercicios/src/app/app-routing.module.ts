import { MenuComponent } from './menu/menu.component';
import { NetflixComponent } from './netflix/netflix.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path : '',
    redirectTo: 'netflix',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },{
    path : 'netflix',
  component: NetflixComponent,
  },
  {
    path : 'menu',
    component: MenuComponent,
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
