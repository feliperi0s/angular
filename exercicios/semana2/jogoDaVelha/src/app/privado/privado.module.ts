import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivadoRoutingModule } from './privado-routing.module';
import { SerieComponent } from './serie/serie.component';


@NgModule({
  declarations: [
    SerieComponent,
  ],
  imports: [
    CommonModule,
    PrivadoRoutingModule
  ]
})
export class PrivadoModule { }
