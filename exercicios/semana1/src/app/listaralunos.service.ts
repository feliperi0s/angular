import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaralunosService {

  public aluno1: string[] = ["John Mathew", 'E354', 'jm@abc.net'];
  public aluno2: string[] = ["Rob Wilson", 'E673', 'rw@abc.net'];
  public aluno3: string[] = ["Rose Adams", 'E865', 'ra@abc.net'];


  constructor() { }

  public getAluno1(): string[] {
    return this.aluno1;
  }
  public getAluno2(): string[] {
    return this.aluno2;
  }
  public getAluno3(): string[] {
    return this.aluno3;
  }
}

