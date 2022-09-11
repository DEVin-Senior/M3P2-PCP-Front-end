import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/templates/header/header.service';
import { IPatchTeacher, ITeacher } from 'src/app/_interfaces/teacher/iTeacher';
import { TeacherService } from 'src/app/_services/teacher/teacher.service';



@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.scss']
})
export class TeacherListComponent implements OnInit {

  teachers: ITeacher[] = [];
  patchTeacher: IPatchTeacher = {
    teacherId: '',
    archived: false
  }

  constructor(private headerService: HeaderService, private teacherService: TeacherService) {
    headerService.headerData = {
      title: 'Docentes',
      routerUrl: 'layout/docente/adicionar'
    }
  }

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


  setArchived(id: string, data: boolean):void{
    this.patchTeacher.teacherId = id;
    this.patchTeacher.archived = !data;
    this.teacherService
            .patchTeacherById(id, this.patchTeacher)
            .subscribe((response: any) => 
                location.reload());

  }

}