import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITeacher } from 'src/app/_interfaces/teacher/iTeacher';
import { Observable } from 'rxjs';
import { API_BASE } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private http: HttpClient) { }

  insertTeacher(teacher: ITeacher): Observable<ITeacher> {
    return this.http.post<ITeacher>(`${API_BASE}/teacher`, teacher);
  }

}
