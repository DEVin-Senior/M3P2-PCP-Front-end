import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITeacher } from 'src/app/_interfaces/teacher/iTeacher';
import { TeacherService } from 'src/app/_services/teacher/teacher.service';

@Component({
  selector: 'app-teacher-update',
  templateUrl: './teacher-update.component.html',
  styleUrls: ['./teacher-update.component.scss']
})
export class TeacherUpdateComponent implements OnInit {

  salvar: string = 'Salvar';
  teacherToUpdate: ITeacher = {
    id: '',
    name: '',
    phone: '',
    email: '',
    skills: [],
    archived: false
    };

  constructor(private route: ActivatedRoute,
    private teacherService: TeacherService) { }

  ngOnInit(): void {
    this.getTeacherToUpdate();
  }

  private async getTeacherToUpdate() {
    const teacherId = this.route.snapshot.params['id'];

    if (!teacherId) {
      throw new Error(`Could not get teacher because ID is null`);
    }

    this.teacherService.getTeacherById(teacherId).subscribe((teacher: ITeacher) => {
      this.mergeTeacher(teacher);
    });

  }

  checkStacks(evento: any){
    console.log(evento.stacks);
    this.teacherToUpdate.skills = evento.stacks.slice(0, 3);
    console.log(this.teacherToUpdate.skills);
  }

  private mergeTeacher(teacherFinded: ITeacher){
    this.teacherToUpdate.id = teacherFinded.id;
    this.teacherToUpdate.name = teacherFinded.name;
    this.teacherToUpdate.phone = teacherFinded.phone;
    this.teacherToUpdate.email = teacherFinded.email;
    this.teacherToUpdate.skills = teacherFinded.skills;
    this.teacherToUpdate.archived = teacherFinded.archived;
  }

}
