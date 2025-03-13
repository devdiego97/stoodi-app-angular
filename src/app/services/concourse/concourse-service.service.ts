import { Injectable } from '@angular/core';
import { IConcourseService } from './concourse.interface';
import { Observable } from 'rxjs';
import { IListConcourse, IcreateConcourseRequest, IcreateConcourseResponse, IGetConcourseById, IPutConcourseByIdResponse } from './concourse.model';
import { HttpClient } from '@angular/common/http';
import { EnvironmentInjector } from '@angular/core';
import { environment } from '../../../environments/environments';


@Injectable({
  providedIn: 'root'
})
export class ConcourseServiceService implements IConcourseService {
  private readonly basePath=environment.apiBaseUrl

  constructor(private http:HttpClient) { }


  listAllConcourses(): Observable<IListConcourse[]> {
    return this.http.get<IListConcourse[]>(`${this.basePath}concourses`)
  }
  addNewConcourse(data: IcreateConcourseRequest): Observable<IcreateConcourseResponse> {
    return this.http.post<IcreateConcourseResponse>(`${this.basePath}concourses`,data)
  }
  getConconcurseFromId(id: number): Observable<IGetConcourseById> {
    return this.http.get<IGetConcourseById>(`${this.basePath}concourses/${id}`)
  }
  updateConcourseFromI(id: number, data: IPutConcourseByIdResponse): Observable<IPutConcourseByIdResponse> {
     return this.http.put<IPutConcourseByIdResponse>(`${this.basePath}concourses/${id}`,data)
  }
  deleteConcourseFromId(id: number): Observable<void> {
    return this.http.delete<void>(`${this.basePath}concourses/${id}`)

  }


}
