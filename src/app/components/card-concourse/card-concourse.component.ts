import { Component, Input } from '@angular/core';
import { IConcourse } from '../../interface/concourses.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-concourse',
  imports: [RouterLink],
  templateUrl: './card-concourse.component.html',
  styleUrl: './card-concourse.component.css'
})

export class CardConcourseComponent {

  @Input()
  concourse:IConcourse | null=null

}
