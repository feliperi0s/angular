import { WebService } from './../../service/services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exer6',
  templateUrl: './exer6.component.html',
  styleUrls: ['./exer6.component.scss']
})
export class Exer6Component implements OnInit {
  
  dadosFilme: any;
  indiceFilme = 300

  constructor(private web:WebService) { }

  ngOnInit(): void { 
    this.carregaDadosFilmes()
  }

  async carregaDadosFilmes() {
    alert('carregando Filme ...')
    this.dadosFilme = await this.web.requisicaoGet(this.indiceFilme,{})
    alert('Filme carregado')
  }

  filmeAnterior(){
    this.indiceFilme -= 1;
    this.carregaDadosFilmes();
  }

  proximoFilm(){
    this.indiceFilme += 1;
    this.carregaDadosFilmes();
  }

}
