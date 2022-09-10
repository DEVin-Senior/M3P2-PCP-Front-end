import { CourseClassUpdateDto } from './../dto/courseclass-update.model';
import { CourseClassArchiveDto } from './../dto/courseclass-archive.model';
import { content } from './../dto/event-read.model';
import { CourseClassService } from './../courseclass.service';
import { Component } from '@angular/core';
import { CourseClassReadDto } from '../dto/courseclass-read.model';
import { Observable, map } from 'rxjs';
import { EventService } from '../dto/event.service';

@Component({
  selector: 'app-courseclass-read',
  templateUrl: './courseclass-read.component.html',
  styleUrls: ['./courseclass-read.component.scss']
})
export class CourseClassReadComponent {

  courseClassReadDto$: Observable<CourseClassReadDto[]> = this.service.read();
  eventList: Observable<content[]> = this.eventService.read();
  constructor(private service: CourseClassService, private eventService: EventService) { }
  display: boolean = false;

  openHistoryModal(courseId: number) { 
    this.eventList = this.eventService.readById(courseId);
    this.display = true;
  }

  archive(courseId: number, courseArchive: boolean) {
    
  }
}

