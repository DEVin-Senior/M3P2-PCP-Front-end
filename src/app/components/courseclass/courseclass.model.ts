export interface CourseClass {
  id?: number
  name: string
  initialDate: string
  endDate: string
  skills: string
  matrixLink: string
  week: {
     id: number
  }
  module: { // verificar se a estrutura de module foi criada
       id: number
  }
  status: boolean
}
