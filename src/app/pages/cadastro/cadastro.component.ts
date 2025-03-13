import { Component } from '@angular/core';
import { LayoutComponent } from "../../components/layout/layout.component";
import { MessageService } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { IUserRegister } from '../../interface/user.interface';


@Component({
  selector: 'app-cadastro',
  imports: [
    LayoutComponent,
    CommonModule,
    ReactiveFormsModule,
    ToastModule
  ],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css',
  providers:[
    MessageService
  ]
})
export class CadastroComponent {
  form:FormGroup


  constructor(
    private fb:FormBuilder,
    private messageService:MessageService
  ){
     this.form=this.fb.group({
      name:['',[Validators.minLength(5),Validators.maxLength(50),Validators.required]],
      lastname:['',[Validators.minLength(5),Validators.maxLength(50),Validators.required]],
      phone: [
        '',
        [
          Validators.required,
          Validators.pattern(/^\d+$/), // Apenas números
          Validators.minLength(10), // Mínimo de 10 dígitos
          Validators.maxLength(11), // Máximo de 11 dígitos
        ],
      ],
      email: ['', Validators.required,Validators.email,Validators.minLength(5), Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)],
      password: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(22)]]
  })
  }




 showSuccess() {
    this.messageService.add({
      severity: 'success', // Tipo de mensagem (success, info, warn, error)
      summary: 'Sucesso!', // Título da mensagem
      detail: 'Sua conta foi  criada  com sucesso.' // Detalhes da mensagem
    });
  }

  onSubmit(){
    if(this.form.valid){
      const formData: IUserRegister= this.form.value;
         console.log('Dados salvos com sucesso:', formData);
          this.showSuccess(); // Exibe mensagem de sucesso
          this.form.reset(); // Limpa o formulário após o envio
    }else{
      console.log('Formulário inválido. Verifique os campos.');
      this.form.markAllAsTouched();
    }
  }

  // Método auxiliar para acessar controles do formulário de forma segura
  getFormControl(controlName: string) {
    return this.form.get(controlName);
  }




}
