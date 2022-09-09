import { Component, OnInit } from '@angular/core';
import { CourseclassContextService } from '../courseclass-context.service';
import { CourseClass } from '../courseclass.model';
import { CourseClassCreateDto } from '../dto/courseclass-create.model';
import { Week } from './registerweek.model';

@Component({
  selector: 'app-registerweek',
  templateUrl: './registerweek.component.html',
  styleUrls: ['./registerweek.component.scss']
})
export class RegisterweekComponent implements OnInit {

  weeks: Week[] = [{ content: "", isCompleted: false }];
  newWeek: string = "";
  // weeks: Week[] = [{content:""}, {content:""}, {content:""}];

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
      }]
    }]
  }

  constructor(private courseClassService: CourseclassContextService) { }

  ngOnInit(): void {
    this.courseClassDto = this.courseClassService.getCourseClass();
    // this.courseClassDto = this.courseClassDto.map( (course) => {
    //   course.weeks = [{content:""}] as any;
    //   return course;
    // })
    console.log(this.courseClassDto);
  }

  addWeek(moduleIndex: number, content: string) {
    // if (this.newWeek) {
    //   let week = new Week();
    //   week.content = this.newWeek;
    //   week.isCompleted = true;
    //   this.weeks.push(week);
    // } else {
    //   alert("Preenchimento do campo obrigatório!");
    // }

    const module = this.courseClassDto.moduleEntityList.findIndex((m, index) => {
      return index == moduleIndex;
    })
    //Setar o objeto Week dentro da lista de weeks do módulo encontrado
    this.courseClassDto.moduleEntityList.forEach((course, index) => {
      if (index == moduleIndex) {
        course.weekEntityList.push({
          content: content,
          initialDate: '2022-01-01'
        })
      }
      return course;
    })
  }
}
