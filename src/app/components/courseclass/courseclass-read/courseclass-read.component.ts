import { Component, OnInit } from '@angular/core';
import { CourseClassReadDto } from '../dto/courseclass-read.model';

@Component({
  selector: 'app-courseclass-read',
  templateUrl: './courseclass-read.component.html',
  styleUrls: ['./courseclass-read.component.scss']
})
export class CourseClassReadComponent implements OnInit {


  courseClassReadDto: CourseClassReadDto = {
    name: '',
    initialDate: '',
    endDate: '',
    stack: '',
    archive: false,
 }

  courses: {name: string, init: string, final: string, skills: string}[] =  [
    {
      name: "IST",
      init: "15/10/2021",
      final: "29/07/2022",
      skills: "JAVA - Primefaces"
    },
    {
      name: "SENAI",
      init: "29/11/2021",
      final: "12/08/2022",
      skills: "JAVA - Angular"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
