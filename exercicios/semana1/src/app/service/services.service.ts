import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  constructor(private api:HttpClient) { }


  public requisicaoGet(codigoFilme:any, headers:any){
    return new Promise((resolve, reject) => {
      this.api.get(environment.filmesAPI +'api_key=7b4e95606c8326a4fab9aab206b3832b&language=pt-BR&page=1',{headers:headers}).toPromise().then((data:any)=>{
        console.log(data)
        resolve(data)
      }).catch(err=>{
        console.log(err)
        reject(err)
      })

    })
  }


}
