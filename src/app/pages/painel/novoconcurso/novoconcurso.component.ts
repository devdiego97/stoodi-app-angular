import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PainellayoutComponent } from "../../../components/painellayout/painellayout.component";
import { ServicesToken } from '../../../services/services.token';
import { ConcourseServiceService } from '../../../services/concourse/concourse-service.service';
import { IConcourseService } from '../../../services/concourse/concourse.interface';
import { IConcourseForm } from '../../../interface/concourses.interface';
import { FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { DatePickerModule } from 'primeng/datepicker';
import { CommonModule } from '@angular/common';
import { EditorModule } from 'primeng/editor';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-novoconcurso',
  imports: [RouterLink,CommonModule, PainellayoutComponent,FormsModule,ReactiveFormsModule,
    DatePickerModule,EditorModule,ToastModule
  ],
  templateUrl: './novoconcurso.component.html',

  styleUrl: './novoconcurso.component.css',
    providers:[
      MessageService,
     {provide:ServicesToken.HTTP.CONCOURSE,useClass:ConcourseServiceService}
    ]
})
export class NovoconcursoComponent {
  form: FormGroup;


   constructor(@Inject(ServicesToken.HTTP.CONCOURSE) private readonly httpService:IConcourseService,
   private messageService: MessageService,
   private fb: FormBuilder
  ){
    this.form = this.fb.group({
      cover: ['', Validators.required], // Campo obrigatório
      city: ['', Validators.required], // Campo obrigatório
      state: ['', Validators.required], // Campo obrigatório
      title: ['', [Validators.required, Validators.minLength(5)]], // Campo obrigatório com mínimo de 5 caracteres
      organization: ['', Validators.required], // Campo obrigatório
      status: ['', Validators.required], // Campo obrigatório
      levelRequired: ['', Validators.required], // Campo obrigatório
      abrangency: ['', Validators.required], // Campo obrigatório
      urlRegistration: ['', [Validators.required, Validators.pattern('https?://.+')]], // Campo obrigatório e deve ser uma URL válida
      dateStart: [null, Validators.required], // Campo obrigatório
      dateEnd: [null, Validators.required], // Campo obrigatório
      numVacancies: [null, [Validators.required, Validators.min(1)]], // Campo obrigatório e deve ser maior que zero
      mediaSalary: [null, [Validators.required, Validators.min(0)]], // Campo obrigatório e não pode ser negativo
      about: ['', [Validators.required, Validators.minLength(10)]] // Campo obrigatório com mínimo de 10 caracteres
    });
  }

    @Input() data:IConcourseForm={
      title:"",
      numVacancies:0,
      mediaSalary:0,
      city:"",
      state:"",
      cover:null,
      status:"",
      dateStart:new Date(),
      dateEnd:new Date(),
      about:"",
      edicts:null,
      organization:"",
      abrangency:'Municipal',
      levelRequired:'Ensino Médio',
      urlRegistration:"",
    }

    showSuccess() {
      this.messageService.add({
        severity: 'success', // Tipo de mensagem (success, info, warn, error)
        summary: 'Sucesso!', // Título da mensagem
        detail: 'Novo concurso criado  com sucesso.' // Detalhes da mensagem
      });
    }

    onSubmit() {
      if (this.form.valid) {
        const formData: IConcourseForm = this.form.value;
        this.httpService.addNewConcourse(formData).subscribe({
          next: (response) => {
            console.log('Dados salvos com sucesso:', response);
            this.showSuccess(); // Exibe mensagem de sucesso
            this.form.reset(); // Limpa o formulário após o envio
          },
          error: (error) => {
            console.error('Erro ao salvar os dados:', error);
            this.messageService.add({
              severity: 'error',
              summary: 'Erro!',
              detail: 'Ocorreu um erro ao salvar os dados. Tente novamente.'
            });
          }
        });
      } else {
        console.log('Formulário inválido. Verifique os campos.');
        this.form.markAllAsTouched(); // Marca todos os campos como "touched" para exibir erros
      }
    }

    // Método auxiliar para acessar controles do formulário de forma segura
    getFormControl(controlName: string) {
      return this.form.get(controlName);
    }



}
