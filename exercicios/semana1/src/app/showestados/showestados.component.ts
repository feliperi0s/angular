import { ListarEstadosService } from './../listar-estados.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showestados',
  templateUrl: './showestados.component.html',
  styleUrls: ['./showestados.component.scss']
})
export class ShowestadosComponent implements OnInit {

  public estados!:any[];
  public ocorreuErro:boolean=false;

  constructor(private _estadosService:ListarEstadosService) { }

  ngOnInit(): void {
    this._estadosService.listarStados().subscribe(
      listarEstados => {
        this.ocorreuErro = false;
        this.estados = listarEstados
      },
      error => {
        console.log('erro',error)
        this.ocorreuErro = true;
      }
    )
  }



}
