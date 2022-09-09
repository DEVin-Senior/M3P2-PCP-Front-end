export interface CourseClassUpdateDto {
    id?: number,
    name: string,
    initialDate: string,
    endDate: string,
    stack: string,
    matrixLink: string,
    archive: boolean,
    moduleEntityList: [{
        id?: number,
        name: string,
        weekEntityList: [{
            id?: number,
            content: string,
            initialDate: string,
            paid?: boolean
        }]
   }]
}