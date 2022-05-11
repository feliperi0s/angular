import { FuncionariosService } from './../funcionarios.service';
import { Component, OnInit } from '@angular/core';
import { Funcionario } from '../funcionario';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.scss']
})
export class FuncionariosComponent implements OnInit {

  public funcionarios: Funcionario[] = [];

  constructor(private _funcionarioService:FuncionariosService) { }

  ngOnInit(): void {
    this._funcionarioService.getFuncionarios()
    .subscribe(
      retorno => {
        this.funcionarios = retorno.map( func => {
          return new Funcionario(
            func.id,
            func.nome,
            func.departamento
          )
        }

        )
      }
    )
  }

}
