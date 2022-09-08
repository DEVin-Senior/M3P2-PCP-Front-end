export interface ITeacher {
    id?: string;
    name: string;
    phone: string;
    email: string;
    skills: Array<any>;
    archived: boolean;
  } //? não obrigatório.

  export interface IPatchTeacher{
    teacherId: string;
    archived: boolean;
  }
  