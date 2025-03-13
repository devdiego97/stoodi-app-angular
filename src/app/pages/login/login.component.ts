import { provideRouter } from '@angular/router';
import { Component } from '@angular/core';
import { LayoutComponent } from "../../components/layout/layout.component";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IUserLogin, IUserRegister } from '../../interface/user.interface';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [
       CommonModule,
      LayoutComponent,
      ReactiveFormsModule,
      FormsModule,ToastModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers:[  MessageService]
})
export class LoginComponent {
  form:FormGroup;

  constructor(
     private messageService: MessageService,
     private fb: FormBuilder
  ){
       this.form = this.fb.group({
            email: ['', Validators.required,Validators.email,Validators.minLength(5), Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)], // Campo obrigatório
           password: ['', Validators.required,Validators.minLength(10),Validators.maxLength(22)],
       })


  }

  showSuccess() {
    this.messageService.add({
      severity: 'success', // Tipo de mensagem (success, info, warn, error)
      summary: 'Sucesso!', // Título da mensagem
      detail: 'Login feito  com sucesso.' // Detalhes da mensagem
    });
  }

  onSubmit(){
    if(this.form.valid){
      const formData: IUserLogin = this.form.value;
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
