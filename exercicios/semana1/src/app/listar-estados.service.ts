import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListarEstadosService {

  public url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';

  constructor(private _httpClient : HttpClient) { }

  listarStados():Observable<any[]>{
  return this._httpClient.get<any[]>(this.url)
  }

}
