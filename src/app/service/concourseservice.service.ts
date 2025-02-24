import { Injectable } from '@angular/core';
import environment from '../../environment/environment';
import { Observable } from 'rxjs';
import { IConcourse } from '../interface/concourses.data';

@Injectable({
  providedIn: 'root'
})
export class ConcourseserviceService {
  private baseUrl=environment.concoursesAPI

  constructor() {


  }

   
}
