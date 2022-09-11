import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ITeacher } from 'src/app/_interfaces/teacher/iTeacher';
import { TeacherService } from 'src/app/_services/teacher.service';

@Component({
  selector: 'app-teacher-update',
  templateUrl: './teacher-update.component.html',
  styleUrls: ['./teacher-update.component.scss'],
})
export class TeacherUpdateComponent implements OnInit {
  salvar: string = 'Salvar';
  skillsFormControl: any = {
    skills: [],
    formTeacher: [],
  };
  private _teacher: ITeacher = {
    id: '',
    name: '',
    phone: '',
    email: '',
    skills: [],
    archived: false,
  };

  constructor(
    private route: ActivatedRoute,
    private teacherService: TeacherService
  ) {}

  ngOnInit(): void {
    this.getTeacherToUpdate(this.getTeacherId());
  }

  public get teacher(): any {
    return this._teacher;
  }

  public get stackFormArray() {
    return this.skillsFormControl.formTeacher.controls['stacks'] as FormArray;
  }

  skillsBuilderToUpdate(evento: any) {
    this.skillsFormControl.skills = evento.skills;
    this.skillsFormControl.formTeacher = evento.formTeacher;
  }

  getTeacherId(): string {
    return this.route.snapshot.params['id'];
  }

  async getTeacherToUpdate(teacherId: string) {
    if (teacherId === '' || teacherId === undefined || !teacherId) {
      throw new Error(`Could not get teacher because ID is null`);
    }

    this.teacherService
      .getTeacherById(teacherId)
      .subscribe((teacher: ITeacher) => {
        this.mergeTeacher(teacher);
        this.addCheckboxes(teacher.skills);
      });
  }

  mergeTeacher(teacherFinded: any) {
    if (!teacherFinded) {
      throw new Error('Teacher not found');
    }

    this.teacher.id = teacherFinded.id;
    this.teacher.name = teacherFinded.name;
    this.teacher.phone = teacherFinded.phone;
    this.teacher.email = teacherFinded.email;
    this.teacher.skills = teacherFinded.skills;
    this.teacher.archived = teacherFinded.archived;
  }

  addCheckboxes(teacherSkills: any) {
    if (!teacherSkills) {
      throw new Error("The teacher's skills not found");
    }

    teacherSkills = this.teacherService.convertSkillFromEnumToString(teacherSkills);

    this.skillsFormControl.skills.forEach((skill: any) => {
      this.stackFormArray.push(this.getSkillFormControl(skill.name, teacherSkills));
    });
  }

 getSkillFormControl(skillName: string, teacherSkills: any): FormControl {
    if (teacherSkills.length === 0) {
      return new FormControl(false);
    }

    return teacherSkills.indexOf(skillName) >= 0 ? new FormControl(true) : new FormControl(false);
  }
}
