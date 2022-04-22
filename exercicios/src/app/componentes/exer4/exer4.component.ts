import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-exer4',
  templateUrl: './exer4.component.html',
  styleUrls: ['./exer4.component.scss']
})
export class Exer4Component implements OnInit {
  fomValid = false
  nomePessoa: string = ''
  _form: FormGroup = this.fb.group({
    nome: ['', [Validators.required,Validators.minLength(3)]],
    email: ['', [Validators.required]],
    nomeFilme: ['', [Validators.required,Validators.minLength(3)]],
    avaliacao:[0, [Validators.required]]
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

  submit(){
    if (this._form.valid) {
      alert(`Você avaliou o filme : ${this._form.value.nomeFilme}`)
    }else {
      alert('esse formulario não é valido preencha todos os campos corretamente')
    }
  }

}
