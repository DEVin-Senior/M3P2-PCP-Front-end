import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPatchTeacher, ITeacher } from 'src/app/_interfaces/teacher/iTeacher';
import { API_BASE } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class TeacherService {
  listTeachers: any[] = [];

  constructor(private http: HttpClient) {}

  insertTeacher(teacher: ITeacher): Observable<ITeacher> {
    return this.http.post<ITeacher>(`${API_BASE}/teacher`, teacher);
  }

  updateTeacher(teacher: ITeacher): Observable<ITeacher> {
    return this.http.put<ITeacher>(
      `${API_BASE}/teacher/${teacher.id}`,
      teacher
    );
  }

  patchTeacherById(id: string, payload: IPatchTeacher){
    const body = {
      teacherId: payload.teacherId,
      archived: payload.archived
    };
    return this.http.patch(`${API_BASE}/teacher/change-archived`, body);
  }

  getAll(): Observable<ITeacher> {
    return this.http.get<ITeacher>(`${API_BASE}/teacher/list`);
  }

  getTeacherById(teacherId: string): Observable<ITeacher> {
    return this.http.get<ITeacher>(`${API_BASE}/teacher/list/${teacherId}`);
  }

  convertSkillFromEnumToString(teacherSkills: any) {
    let selectedStacksNames = teacherSkills;

    selectedStacksNames = selectedStacksNames.map((stack: any) =>
      stack == 'C_SHARP' ? 'C#' : stack
    );

    selectedStacksNames = selectedStacksNames.map((stack: any) =>
      stack == 'DOT_NET' ? '.NET' : stack
    );

    return selectedStacksNames;
  }

  convertSkillFromStringToEnum(teacherSkills: any){
    let selectedStacksNames = teacherSkills;

    selectedStacksNames.map(
      (stack: any, i: any) => (stack == 'C#' ? 'C_SHARP' : stack)
    );

    selectedStacksNames.map(
      (stack: any, i: any) => (stack == '.NET' ? 'DOT_NET' : stack)
    );

    return selectedStacksNames;
  }
}
