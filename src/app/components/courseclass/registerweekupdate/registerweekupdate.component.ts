import { Component, OnInit } from '@angular/core';
import { CourseClassService } from './../courseclass.service';
import { CourseclassContextService } from '../courseclass-context.service';
import {ConfirmationService, MessageService} from 'primeng/api';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/templates/header/header.service';
import { CourseclassUpdateContextService } from '../courseclassUpdate-context.service';
import { CourseClassUpdateDto } from '../dto/courseclass-update.model';


@Component({
  selector: 'app-registerweekupdate',
  templateUrl: './registerweekupdate.component.html',
  styleUrls: ['./registerweekupdate.component.scss']
})
export class RegisterweekupdateComponent implements OnInit {
  courseClassDto: CourseClassUpdateDto = {
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

  constructor(private courseClassServiceDto: CourseClassService, private courseclassUpdateContextService: CourseclassUpdateContextService, private confirmationService: ConfirmationService, private headerService: HeaderService, private router: Router) {
    headerService.headerData = {
      title: 'Turmas',
      routerUrl: '/layout/turmas/modulo'
    }
  }

  confirm(event: Event, week: any, moduleIndex: number) {
    this.confirmationService.confirm({
        target: event.target as EventTarget,
        message: 'Você gostaria de excluir?',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.removeWeek(week, moduleIndex)
        },
        reject: () => {

        }
    });
}

  ngOnInit(): void {
    this.courseClassDto = this.courseclassUpdateContextService.getCourseClass();
    this.courseClassDto.moduleEntityList.forEach((modulo, index) => {
          modulo.weekEntityList.forEach((week) => {
          week.initialDate = this.courseClassDto.initialDate
        })
    })
  }

  addWeek(moduleIndex: number, content: string, i: number) {
    const module = this.courseClassDto.moduleEntityList.findIndex((m, index) => {
      return index == moduleIndex;
    })

    this.courseClassDto.moduleEntityList.forEach((course, index) => {
      if (index == moduleIndex) {
        course.weekEntityList.push({
          content: content,
          initialDate: '2022-01-01',
          paid: false
        })
      }

      return course;
    })
  }

  removeWeek(week: any, moduleIndex: number) {
    this.courseClassDto.moduleEntityList.forEach((course, index) => {

      if (index == moduleIndex) {
        course.weekEntityList.splice(course.weekEntityList.indexOf(week), 1);
      }
    })
  }

  saveModule() {
     console.log(this.courseClassDto);
      this.courseClassServiceDto.update(this.courseClassDto).subscribe(() => {
      this.router.navigate(['/layout/turmas']);
    });
  }
}
