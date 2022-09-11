import { CourseClassService } from './../courseclass.service';
import { Component, OnInit } from '@angular/core';
import { CourseclassContextService } from '../courseclass-context.service';
import { CourseClassCreateDto } from '../dto/courseclass-create.model';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/templates/header/header.service';

@Component({
  selector: 'app-registerweek',
  templateUrl: './registerweek.component.html',
  styleUrls: ['./registerweek.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class RegisterweekComponent implements OnInit {

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

  constructor(private courseClassServiceDto: CourseClassService, private courseClassService: CourseclassContextService, private confirmationService: ConfirmationService, private headerService: HeaderService, private router: Router) {
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
        //this.messageService.add({severity:'info', summary:'Confirmed', detail:'You have accepted'});
        this.removeWeek(week, moduleIndex)
      },
      reject: () => {
        //this.messageService.add({severity:'error', summary:'Rejected', detail:'You have rejected'});
      }
    });
  }

  ngOnInit(): void {
    this.courseClassDto = this.courseClassService.getCourseClass();

    if (this.courseClassDto.name.trim() != '' && this.courseClassDto.matrixLink.trim() != '' && this.courseClassDto.stack.trim() != '') {
      this.courseClassDto.moduleEntityList.forEach((modulo, index) => {

        modulo.weekEntityList.forEach((week) => {
          week.initialDate = this.courseClassDto.initialDate
        })
      })
    } else {
      this.router.navigate(['/layout/turmas/adicionar']);
    }
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
    this.courseClassServiceDto.create(this.courseClassDto).subscribe(() => {
      this.router.navigate(['/layout/turmas']);
    });
  }
}