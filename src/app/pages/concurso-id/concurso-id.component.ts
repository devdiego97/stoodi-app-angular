import { Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LayoutComponent } from "../../components/layout/layout.component";
import { ServicesToken } from '../../services/services.token';
import { IConcourseService } from '../../services/concourse/concourse.interface';
import { ConcourseServiceService } from '../../services/concourse/concourse-service.service';

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

    constructor(@Inject(ServicesToken.HTTP.CONCOURSE) private readonly httpService:IConcourseService){

    }
}
