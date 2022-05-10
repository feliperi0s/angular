import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicoRoutingModule } from './publico-routing.module';
import { EsqueciSenhaComponent } from "./esqueci-senha/EsqueciSenhaComponent";
import { InformarEmailComponent } from './informar-email/informar-email.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
   EsqueciSenhaComponent,
   InformarEmailComponent
  ],
  imports: [
    CommonModule,
    PublicoRoutingModule,
    ReactiveFormsModule,
  ]
})
export class PublicoModule { }
