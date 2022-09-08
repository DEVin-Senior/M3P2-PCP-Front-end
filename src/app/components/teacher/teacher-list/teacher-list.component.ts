import { Component, OnInit } from '@angular/core';
import { ITeacher } from 'src/app/_interfaces/teacher/iTeacher';
import { TeacherService } from 'src/app/_services/teacher/teacher.service';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.scss']
})
export class TeacherListComponent implements OnInit {

  teachers: ITeacher[] = [];

  constructor(
    private teacherService: TeacherService
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
   this.teacherService.getAll().subscribe(
    (result: any) => {
      for (let i = 0; i < result.length; i++){
        let teacher = result[i] as ITeacher;
        teacher.skills = this.teacherService.convertSkillFromEnumToString(teacher.skills).join(', ');
        this.teachers?.push(teacher);
      }
    },
    error => {
      console.log(error);
    })
   }

}
