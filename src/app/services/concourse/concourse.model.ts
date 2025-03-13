



export interface IcreateConcourseRequest{
  title:string,
  numVacancies:number,
  mediaSalary:number,
  cover:string | null,
  dateStart:Date,
  dateEnd:Date,
  about:string,
  status:string,
  edicts:string[] | null,
  organization:string,
  abrangency:string,
  levelRequired:string,
  urlRegistration:string,

}
export interface IcreateConcourseResponse{
  id:number,
  title:string,
  numVacancies:number,
  mediaSalary:number,
  cover:string | null,
  dateStart:Date,
  dateEnd:Date,
  about:string,
  status:string,
  edicts:string[] | null,
  organization:string,
  abrangency:string,
  levelRequired:string,
  urlRegistration:string,

}
export interface IPutConcourseByIdResponse{
  title:string,
  numVacancies:number,
  mediaSalary:number,
  cover:string | null,
  dateStart:Date,
  dateEnd:Date,
  about:string,
  status:string,
  edicts:string | null,
  organization:string,
  abrangency:string,
  levelRequired:string,
  urlRegistration:string,

}
export interface IPutConcourseByIdRequest{
  id:number,
  title:string,
  numVacancies:number,
  mediaSalary:number,
  cover:string | null,
  dateStart:Date,
  dateEnd:Date,
  about:string,
  status:string,
  edicts:string | null,
  organization:string,
  abrangency:string,
  levelRequired:string,
  urlRegistration:string,

}


export interface IGetConcourseById{
    id:number,
    title:string,
    numVacancies:number,
    mediaSalary:number,
    cover:string | null,
    dateStart:Date,
    dateEnd:Date,
    about:string,
    city:string,
    state:string
    status:string,
    edicts:string[] | null,
    organization:string,
    abrangency:"Municipal" | "Estadual" | "Nacional",
    levelRequired:"Ensino Médio" | "Ensino Fundamental" | "Ensino Superior" | "Todos",
    urlRegistration:string,

}

export interface IListConcourse{
  id:number,
  title:string,
  numVacancies:number,
  mediaSalary:number,
  cover:string | null,
  dateStart:Date,
  dateEnd:Date,
  about:string,
  status:string,
  edicts:string | null,
  organization:string,
  abrangency:string,
  levelRequired:string,
  urlRegistration:string,

}
