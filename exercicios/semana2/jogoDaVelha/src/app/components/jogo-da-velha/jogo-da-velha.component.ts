import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ReturnStatement } from '@angular/compiler';

@Component({
  selector: 'app-jogo-da-velha',
  templateUrl: './jogo-da-velha.component.html',
  styleUrls: ['./jogo-da-velha.component.scss']
})
export class JogoDaVelhaComponent implements OnInit {

  public a1:string=''
  public a2:string=''
  public a3:string=''
  public b1:string=''
  public b2:string=''
  public b3:string=''
  public c1:string=''
  public c2:string=''
  public c3:string=''

  public primeiro:string='';
  public aletori:number=Math.floor(Math.random() * 10);
  public xisOuZero:string = ''
  public venc:string = ''

  constructor(private location: Location) { }

  ngOnInit(): void {
    this.quemComeca()
  }

  public quemComeca(){
    if (this.aletori%2 == 0) {
      this.primeiro='X'
    }else{
      this.primeiro='O'
    }
  }


  public mudarJogador(){
    if (this.primeiro == 'X') {
      this.primeiro = 'O'
    }else{
      this.primeiro = 'X'
    }
  }

  public vencedor() {
    if (this.a1 && this.a2 && this.a3 == "X" || this.b1 && this.b2 && this.b3 == "X" || this.c1 && this.c2 && this.c3 == "X" || this.a1 && this.b1 && this.c1 == "X" || this.a3 && this.b3 && this.c3 == "X" || this.a1 && this.b1 && this.c1 == "X" || this.a1 && this.b2 && this.c3 == "X" || this.a3 && this.b2 && this.c1 == "X") {
     this.venc = "O vencedor é X"
    }if(this.a1 && this.a2 && this.a3 == "O" || this.b1 && this.b2 && this.b3 == "O" || this.c1 && this.c2 && this.c3 == "O" || this.a1 && this.b1 && this.c1 == "O" || this.a3 && this.b3 && this.c3 == "O" || this.a1 && this.b1 && this.c1 == "O" || this.a1 && this.b2 && this.c3 == "O" || this.a3 && this.b2 && this.c1 == "O") {
      this.venc = "O vencedor é O"
    }
  }

 public zerar() {
  if (this.a1 = 'X' || "O" , this.a2 = 'X' || "O") {
    this.a1 = ''
  }
 }

}
