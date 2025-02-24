import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PainellayoutComponent } from "../../../components/painellayout/painellayout.component";

@Component({
  selector: 'app-novoconcurso',
  imports: [RouterLink, PainellayoutComponent],
  templateUrl: './novoconcurso.component.html',
  styleUrl: './novoconcurso.component.css'
})
export class NovoconcursoComponent {

}
