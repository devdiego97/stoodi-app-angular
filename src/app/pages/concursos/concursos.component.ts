import { Component } from '@angular/core';
import { LayoutComponent } from "../../components/layout/layout.component";
import { CardConcourseComponent } from "../../components/card-concourse/card-concourse.component";
import { concursos } from '../../../data/data';
import { CarroselComponent } from "../../components/carrosel/carrosel.component";
import { IConcourse } from '../../interface/concourses.data';

@Component({
  selector: 'app-concursos',
  imports: [LayoutComponent, CardConcourseComponent, CarroselComponent],
  templateUrl: './concursos.component.html',
  styleUrl: './concursos.component.css'
})
export class ConcursosComponent {
 data:IConcourse[] |any | []=[]
  constructor(){
    this.data=concursos
  }
}
