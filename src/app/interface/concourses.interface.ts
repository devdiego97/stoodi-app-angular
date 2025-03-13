


export interface IConcourse{
  id:number,
  title:string,
  numVacancies:number,
  mediaSalary:number,
  city:string | null,
  state:string | null,
  cover:string | null,
  status:string,
  dateStart:Date,
  dateEnd:Date,
  about:string,
  edicts:string[] | null,
  organization:string,
  abrangency:'Municipal' | 'Estadual' | 'Nacional',
  levelRequired:'Ensino Médio' | 'Ensino Fundamental' |'Ensino Superior' | 'Todos',
  urlRegistration:string,
}


export interface IConcourseForm{
  id?:number,
  title:string,
  numVacancies:number,
  mediaSalary:number,
  city:string | null,
  state:string | null,
  cover:string | null,
  status:string,
  dateStart:Date,
  dateEnd:Date,
  about:string,
  edicts:string[] | null,
  organization:string,
  abrangency:'Municipal' | 'Estadual' | 'Nacional',
  levelRequired:'Ensino Médio' | 'Ensino Fundamental' |'Ensino Superior' | 'Todos',
  urlRegistration:string,
}
