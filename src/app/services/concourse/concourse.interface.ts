import { IcreateConcourseRequest, IcreateConcourseResponse, IGetConcourseById, IListConcourse, IPutConcourseByIdResponse } from './concourse.model';
import { Observable } from "rxjs";


export interface IConcourseService{

  listAllConcourses():Observable<IListConcourse[]>
  addNewConcourse(data:IcreateConcourseRequest):Observable<IcreateConcourseResponse>
  getConconcurseFromId(id:number):Observable<IGetConcourseById>
  updateConcourseFromI(id:number,data:IPutConcourseByIdResponse):Observable<IPutConcourseByIdResponse>
  deleteConcourseFromId(id:number):Observable<void>

}
