import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITeacher } from 'src/app/_interfaces/teacher/iTeacher';
import { API_BASE } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  listTeachers: any[] = [];

  constructor(private http: HttpClient) { }

  insertTeacher(teacher: ITeacher): Observable<ITeacher> {
    return this.http.post<ITeacher>(`${API_BASE}/teacher`, teacher);
  }

  getAll(): Observable<any> {
    return this.http.get(`${API_BASE}/teacher/list`);
  }

  getTeacherById(teacherId: string): Observable<ITeacher> {
    return this.http.get<ITeacher>(`${API_BASE}/teacher/list/${teacherId}`);
  }


}
