import { Component, Input } from '@angular/core';
import { IConcourse } from '../../interface/concourses.interface';

@Component({
  selector: 'app-card-concourse',
  imports: [],
  templateUrl: './card-concourse.component.html',
  styleUrl: './card-concourse.component.css'
})

export class CardConcourseComponent {

  @Input()
  concourse:IConcourse | null=null

}
