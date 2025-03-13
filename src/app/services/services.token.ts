import { InjectionToken } from "@angular/core";
import { IConcourseService } from "./concourse/concourse.interface";


export const ServicesToken={
 HTTP:{
   CONCOURSE:new InjectionToken<IConcourseService>("ServicesToken.HTTP.CONCOURSE"),

 }
}
