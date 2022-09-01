export interface CourseClass {
  id?: string
  name: string
  user: { //verificar se a estrutura de user foi criada
       id: string
  }
  initialDate: string
  endDate: string
  skills: string
  matrixLink: string
  module: { // verificar se a estrutura de module foi criada
       id: string
  }
  status: boolean
}
