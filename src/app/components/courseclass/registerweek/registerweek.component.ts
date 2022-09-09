import { LoginComponent } from './../../login/login.component';
import { Component, OnInit } from '@angular/core';
import { CourseclassContextService } from '../courseclass-context.service';
import { CourseClass } from '../courseclass.model';
import { CourseClassCreateDto } from '../dto/courseclass-create.model';
import { Week } from './registerweek.model';
import { ConfirmationService } from 'primeng/api';

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

  constructor(private courseClassService: CourseclassContextService, private confirmationService: ConfirmationService) { }

//   confirm(event: Event, week: any, moduleIndex: number) {
//     this.confirmationService.confirm({
//         target: event.target as EventTarget,
//         message: 'Are you sure that you want to proceed?',
//         icon: 'pi pi-exclamation-triangle',
//         accept: () => {
//             this.removeWeek(week, moduleIndex);
//         },
//         reject: () => {
//             reject action
//         }
//     });
// }

  ngOnInit(): void {
    this.courseClassDto = this.courseClassService.getCourseClass();
    // this.courseClassDto = this.courseClassDto.map( (course) => {
    //   course.weeks = [{content:""}] as any;
    //   return course;
    // })
    console.log(this.courseClassDto);
  }

  addWeek(moduleIndex: number, content: string) {
    const module = this.courseClassDto.moduleEntityList.findIndex((m, index) => {
      return index == moduleIndex;
    })

    this.courseClassDto.moduleEntityList.forEach((course, index) => {
      if (index == moduleIndex) {
        course.weekEntityList.push({
          content: content,
          initialDate: '2022-01-01'
        })
      }

      return course;
    })
    console.log(this.courseClassDto);
  }

  removeWeek(week: any, moduleIndex: number) {
    this.courseClassDto.moduleEntityList.forEach((course, index) => {
      console.log(week);

      if (index == moduleIndex) {
        course.weekEntityList.splice(course.weekEntityList.indexOf(week), 1);
      }
    })
  }
}
