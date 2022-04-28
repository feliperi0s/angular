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
      this.primeiro='../../../assets/images/gremio.png'
    }else{
      this.primeiro='../../../assets/images/inter.png'
    }
  }


  public mudarJogador(){
    if (this.primeiro == '../../../assets/images/gremio.png') {
      this.primeiro = '../../../assets/images/inter.png'
    }else{
      this.primeiro = '../../../assets/images/gremio.png'
    }
  }

  public vencedor() {
    if (this.a1 && this.a2 && this.a3 == '../../../assets/images/gremio.png' || this.b1 && this.b2 && this.b3 == '../../../assets/images/gremio.png' || this.c1 && this.c2 && this.c3 == '../../../assets/images/gremio.png' || this.a1 && this.b1 && this.c1 == '../../../assets/images/gremio.png' || this.a3 && this.b3 && this.c3 == '../../../assets/images/gremio.png' || this.a1 && this.b1 && this.c1 == '../../../assets/images/gremio.png' || this.a1 && this.b2 && this.c3 == '../../../assets/images/gremio.png' || this.a3 && this.b2 && this.c1 == '../../../assets/images/gremio.png') {
     this.venc = '../../../assets/images/gremio.png'
    }if(this.a1 && this.a2 && this.a3 == '../../../assets/images/inter.png' || this.b1 && this.b2 && this.b3 == '../../../assets/images/inter.png' || this.c1 && this.c2 && this.c3 == '../../../assets/images/inter.png' || this.a1 && this.b1 && this.c1 == '../../../assets/images/inter.png' || this.a3 && this.b3 && this.c3 == '../../../assets/images/inter.png' || this.a1 && this.b1 && this.c1 == '../../../assets/images/inter.png' || this.a1 && this.b2 && this.c3 == '../../../assets/images/inter.png' || this.a3 && this.b2 && this.c1 == '../../../assets/images/inter.png') {
      this.venc = '../../../assets/images/inter.png'
    }
  }

 public zerar() {
  if (this.a1 = '../../../assets/images/gremio.png' || '../../../assets/images/inter.png' , this.a2 = '../../../assets/images/gremio.png' || '../../../assets/images/inter.png') {
    this.a1 = ''
  }
 }

}
