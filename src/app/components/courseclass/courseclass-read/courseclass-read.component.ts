import { CourseClassService } from './../courseclass.service';
import { Component } from '@angular/core';
import { CourseClassReadDto } from '../dto/courseclass-read.model';
import { Observable } from 'rxjs';
import { HeaderService } from 'src/app/templates/header/header.service';

@Component({
  selector: 'app-courseclass-read',
  templateUrl: './courseclass-read.component.html',
  styleUrls: ['./courseclass-read.component.scss']
})
export class CourseClassReadComponent {

  courseClassReadDto$: Observable<CourseClassReadDto[]> = this.service.read();
  constructor(private service: CourseClassService, private headerService: HeaderService) { 
    headerService.headerData = {
      title: 'Turmas',
      routerUrl: 'layout/turmas'
    }
  }

}

