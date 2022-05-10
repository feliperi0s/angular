import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EsqueciSenhaComponent } from "./esqueci-senha/EsqueciSenhaComponent";

const routes: Routes = [
  {path: '',
  redirectTo:'login',
  pathMatch :'full' 
  },
  {path: 'esqueciSenha',
  component: EsqueciSenhaComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicoRoutingModule { }
