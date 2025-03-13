import { Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LayoutComponent } from "../../components/layout/layout.component";
import { ServicesToken } from '../../services/services.token';
import { IConcourseService } from '../../services/concourse/concourse.interface';
import { ConcourseServiceService } from '../../services/concourse/concourse-service.service';
import { IConcourse } from '../../interface/concourses.interface';

@Component({
  selector: 'app-concurso-id',
  imports: [LayoutComponent],
  templateUrl: './concurso-id.component.html',
  styleUrl: './concurso-id.component.css',
    providers:[
      {provide:ServicesToken.HTTP.CONCOURSE,useClass:ConcourseServiceService}
    ]
})
export class ConcursoIdComponent {
  concourse: IConcourse | null = null;
    constructor(@Inject(ServicesToken.HTTP.CONCOURSE) private readonly httpService:IConcourseService,
    private route: ActivatedRoute
  ){

    }


    ngOnInit(): void {
     this.loadConcourseId()
    }


    loadConcourseId(): void {
      const id = this.route.snapshot.paramMap.get('id')!;
      this.httpService.getConconcurseFromId(parseInt(id as string)).subscribe({
        next: (response) => {
          this.concourse=response;
          console.log('Dados salvos com sucesso:', response);
        },
        error: (error) => {
          console.error('Erro ao salvar os dados:', error);

        }
      })
    }

}
