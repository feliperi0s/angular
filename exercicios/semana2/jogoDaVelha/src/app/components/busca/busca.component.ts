import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.scss']
})
export class BuscaComponent implements OnInit {

  @Output() enviarBusca : EventEmitter<any> = new EventEmitter<any>();

   buscar:string = ''

  constructor() { }

  ngOnInit(): void {
  }

  digitadoNaBusca(event:any){
    this.enviarBusca.emit(this.buscar)
  }

}
