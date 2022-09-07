import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPatchTeacher, ITeacher } from 'src/app/_interfaces/teacher/iTeacher';
import { Observable } from 'rxjs';
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

  patchTeacherById(id: string, payload: IPatchTeacher){
    const body = {
      teacherId: payload.teacherId,
      archived: payload.archived
    };
    return this.http.patch(`${API_BASE}/teacher/change-archived`, body);
  }

  getAll(): Observable<any> {
    return this.http.get(`${API_BASE}/teacher/list`); 
  }

}
