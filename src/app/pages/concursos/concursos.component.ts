import { Component, Inject } from '@angular/core';
import { LayoutComponent } from "../../components/layout/layout.component";
import { CardConcourseComponent } from "../../components/card-concourse/card-concourse.component";
import { concursos } from '../../../data/data';
import { CarroselComponent } from "../../components/carrosel/carrosel.component";
import { IConcourse } from '../../interface/concourses.interface';
import { ServicesToken } from '../../services/services.token';
import { IConcourseService } from '../../services/concourse/concourse.interface';
import { ConcourseServiceService } from '../../services/concourse/concourse-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-concursos',
  imports: [LayoutComponent, CardConcourseComponent, CarroselComponent,CommonModule],
  templateUrl: './concursos.component.html',
  styleUrl: './concursos.component.css',
  providers:[
    {provide:ServicesToken.HTTP.CONCOURSE,useClass:ConcourseServiceService}
  ]
})
export class ConcursosComponent {
   data:IConcourse[] |any | []=[]
  constructor(@Inject(ServicesToken.HTTP.CONCOURSE) private readonly httpService:IConcourseService){ }


  ngOnInit(): void {
    this.loadConcoursesAll();
  }

  loadConcoursesAll(): void {
    this.httpService.listAllConcourses().subscribe({
      next: (response) => {
        this.data=response
        console.log('Dados salvos com sucesso:', response);
      },
      error: (error) => {
        console.error('Erro ao salvar os dados:', error);

      }
    })
  }



}
