import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JogoDaVelhaComponent } from './components/jogo-da-velha/jogo-da-velha.component';
import { BuscaComponent } from './components/busca/busca.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './components/menu/menu.component';
import { FullComponent } from './components/layouts/full/full.component';
import { ContentComponent } from './components/layouts/content/content.component';
import { SigninComponent } from './components/signin/signin.component';
import { EsqueciSenhaComponent } from "./publico/esqueci-senha/EsqueciSenhaComponent";
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    JogoDaVelhaComponent,
    BuscaComponent,
    MenuComponent,
    FullComponent,
    ContentComponent,
    SigninComponent,
    FuncionariosComponent,    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
