import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JogoDaVelhaComponent } from './components/jogo-da-velha/jogo-da-velha.component';
import { BuscaComponent } from './components/busca/busca.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './components/menu/menu.component';
import { FullComponent } from './components/layouts/full/full.component';
import { ContentComponent } from './components/layouts/content/content.component';
import { SigninComponent } from './components/signin/signin.component';
import { EsqueciSenhaComponent } from './components/esqueci-senha/esqueci-senha.component';
import { InformarEmailComponent } from './components/informar-email/informar-email.component';

@NgModule({
  declarations: [
    AppComponent,
    JogoDaVelhaComponent,
    BuscaComponent,
    HomeComponent,
    MenuComponent,
    FullComponent,
    ContentComponent,
    SigninComponent,
    EsqueciSenhaComponent,
    InformarEmailComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
