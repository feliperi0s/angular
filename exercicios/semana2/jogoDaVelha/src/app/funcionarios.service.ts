import { Funcionario } from './funcionario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {

  private url = 'http://localhost:3000/funcionarios'

  constructor(private _httpClient: HttpClient) {  }

  public getFuncionariosSync():any {
   return this._httpClient.get(this.url);
  }

  public getFuncionarios():Observable<Funcionario[]>{
    return this._httpClient.get<Funcionario[]>(this.url)
  }

}
