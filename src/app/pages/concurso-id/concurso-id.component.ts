import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LayoutComponent } from "../../components/layout/layout.component";

@Component({
  selector: 'app-concurso-id',
  imports: [LayoutComponent],
  templateUrl: './concurso-id.component.html',
  styleUrl: './concurso-id.component.css'
})
export class ConcursoIdComponent {

  constructor(
    private paramsData:ActivatedRoute
  ){
    this.paramsData.params
  }
}
