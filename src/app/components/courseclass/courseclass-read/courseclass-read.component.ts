import { CourseClassUpdateDto } from './../dto/courseclass-update.model';
import { CourseClassArchiveDto } from './../dto/courseclass-archive.model';
import { content } from './../dto/event-read.model';
import { CourseClassService } from './../courseclass.service';
import { Component } from '@angular/core';
import { CourseClassReadDto } from '../dto/courseclass-read.model';
import { Observable, map } from 'rxjs';
import { EventService } from '../dto/event.service';
import { HeaderService } from 'src/app/templates/header/header.service';

@Component({
  selector: 'app-courseclass-read',
  templateUrl: './courseclass-read.component.html',
  styleUrls: ['./courseclass-read.component.scss']
})
export class CourseClassReadComponent {

  courseClassReadDto$: Observable<CourseClassReadDto[]> = this.service.read();
  courseClassArchive: CourseClassArchiveDto = {
    archive: false
  }
  eventList: Observable<content[]> = this.eventService.read();
  constructor(private service: CourseClassService, private eventService: EventService, private headerService: HeaderService) {

    headerService.headerData = {
      title: 'Turmas',
      routerUrl: 'layout/turmas'
    }
   }
  display: boolean = false;
  headerModalText: string = 'Historico da turma: ';

  openHistoryModal(courseId: number, courseName: string) { 
    this.eventList = this.eventService.readById(courseId);
    this.display = true;
    this.headerModalText = 'Historico da turma: ' + courseName;
  }

  archive(courseId: number, courseArchive: boolean) {
    this.courseClassArchive.classId = courseId.toString();
    this.courseClassArchive.archive = !courseArchive;
    this.service.archive(this.courseClassArchive).subscribe((response: any) => location.reload()); 
  }

}

