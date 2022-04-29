import { ListaralunosService } from './../listaralunos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consumindo-servico',
  templateUrl: './consumindo-servico.component.html',
  styleUrls: ['./consumindo-servico.component.scss']
})
export class ConsumindoServicoComponent implements OnInit {

  public InfDeAluno1: string[] = [];
  public InfDeAluno2: string[] = [];
  public InfDeAluno3: string[] = [];

  constructor(private _listaDeAlunosService: ListaralunosService) { }

  ngOnInit(): void {
  }

  public getInfFromServiceAluno1(){
    this.InfDeAluno1 = this._listaDeAlunosService.getAluno1()
  }
  public getInfFromServiceAluno2(){
    this.InfDeAluno2 = this._listaDeAlunosService.getAluno2()
  }
  public getInfFromServiceAluno3(){
    this.InfDeAluno3 = this._listaDeAlunosService.getAluno3()
  }

}
