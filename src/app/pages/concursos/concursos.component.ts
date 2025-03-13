import { Component, Inject } from '@angular/core';
import { LayoutComponent } from "../../components/layout/layout.component";
import { CardConcourseComponent } from "../../components/card-concourse/card-concourse.component";
import { concursos } from '../../../data/data';
import { CarroselComponent } from "../../components/carrosel/carrosel.component";
import { IConcourse } from '../../interface/concourses.interface';
import { ServicesToken } from '../../services/services.token';
import { IConcourseService } from '../../services/concourse/concourse.interface';
import { ConcourseServiceService } from '../../services/concourse/concourse-service.service';

@Component({
  selector: 'app-concursos',
  imports: [LayoutComponent, CardConcourseComponent, CarroselComponent],
  templateUrl: './concursos.component.html',
  styleUrl: './concursos.component.css',
  providers:[
    {provide:ServicesToken.HTTP.CONCOURSE,useClass:ConcourseServiceService}
  ]
})
export class ConcursosComponent {
 data:IConcourse[] |any | []=[]
  constructor(@Inject(ServicesToken.HTTP.CONCOURSE) private readonly httpService:IConcourseService){
    
  }
}
