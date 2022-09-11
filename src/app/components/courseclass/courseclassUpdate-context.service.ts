import { Injectable } from '@angular/core';
import { CourseClass } from './courseclass.model';
import { CourseClassUpdateDto } from './dto/courseclass-update.model';

@Injectable({
  providedIn: 'root'
})
export class CourseclassUpdateContextService {

  courseClassUpdateDto: CourseClassUpdateDto = {
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

  setCourseClass(courseClassUpdateDto: CourseClassUpdateDto) {
    this.courseClassUpdateDto = courseClassUpdateDto;
  }

  getCourseClass() {
    return this.courseClassUpdateDto;
  }
}
