import { WebService } from './service/services.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './componentes/home/home.component';
import { Exer1Component } from './componentes/exer1/exer1.component';
import { Exer2Component } from './componentes/exer2/exer2.component';
import { Exer3Component } from './componentes/exer3/exer3.component';
import { Exer4Component } from './componentes/exer4/exer4.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Exer6Component } from './componentes/exer6/exer6.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Exer1Component,
    Exer2Component,
    Exer3Component,
    Exer4Component,
    Exer6Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [WebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
