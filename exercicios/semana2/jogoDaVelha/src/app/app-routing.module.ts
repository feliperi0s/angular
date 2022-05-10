import { PublicoRoutingModule } from './publico/publico-routing.module';
import { MenuComponent } from './components/menu/menu.component';
import { JogoDaVelhaComponent } from './components/jogo-da-velha/jogo-da-velha.component';
import { BuscaComponent } from './components/busca/busca.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '',
  redirectTo:'publico',
  pathMatch :'full' 
  },

  {path: 'publico',
  loadChildren:() => import ('./publico/publico-routing.module').then(m =>m.PublicoRoutingModule)
},
{path: 'privado',
  loadChildren:() => import ('./privado/privado-routing.module').then(m =>m.PrivadoRoutingModule)
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
