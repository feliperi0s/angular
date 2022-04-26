import { Exer6Component } from './componentes/exer6,7,8,9,10/exer6.component';
import { Exer4Component } from './componentes/exer4,5/exer4.component';
import { Exer3Component } from './componentes/exer3/exer3.component';
import { Exer1Component } from './componentes/exer1/exer1.component';
import { HomeComponent } from './componentes/home/home.component';
import { NgModule, Component } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { Exer2Component } from './componentes/exer2/exer2.component';


const routes: Routes = [ 
  { path:'',component:HomeComponent},
  {path:'exer1',component:Exer1Component},
  {path:'exer2', component:Exer2Component},
  {path:'exer3', component:Exer3Component},
  {path:'exer4', component:Exer4Component},
  {path:'exer6', component:Exer6Component},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
