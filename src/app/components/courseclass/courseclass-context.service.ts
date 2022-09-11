import { Injectable } from '@angular/core';
import { CourseClassCreateDto } from './dto/courseclass-create.model';

@Injectable({
  providedIn: 'root'
})
export class CourseclassContextService {

  courseClassDto: CourseClassCreateDto = {
    name: '',
    initialDate: '',
    endDate: '',
    stack: '',
    matrixLink: '',
    archive: false,
    moduleEntityList: [{
         name: '',
         weekEntityList: [{
              content: '',
              initialDate: '',
              paid: false
         }]
   }]
 }

  constructor() { }

  setCourseClass(courseClassDto: CourseClassCreateDto) {
    this.courseClassDto = courseClassDto;
  }

  getCourseClass() {
    return this.courseClassDto;
  }
}
