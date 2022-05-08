import { Component, OnInit, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-informar-email',
  templateUrl: './informar-email.component.html',
  styleUrls: ['./informar-email.component.scss']
})
export class InformarEmailComponent implements OnInit {

  form : FormGroup = this.fb.group({
    email: ['',Validators.required,Validators.email]
  })

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {

  }

}
