import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  cadastroForm: FormGroup;
  submittedData: any;

  constructor(private fb: FormBuilder) {

    this.cadastroForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: [''],
      mensagem: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    console.log('Entrou no onSubmit'); 
    if (this.cadastroForm.valid) {

      this.submittedData = this.cadastroForm.value;
      console.log('Dados do formulário:', this.submittedData);
    } else {
      console.log('Formulário inválido');
    }
  }
}
