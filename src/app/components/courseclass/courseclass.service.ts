import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError, Observable, EMPTY } from 'rxjs';
import { CourseClass } from './courseclass.model';
import { Message, MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class CourseClassService {
  courseClass: CourseClass = {
    name: '',
    user: { id: '' },
    initialDate: '',
    endDate: '',
    skills: '',
    matrixLink: '',
    module: { id: '' },
    status: true
  }

  baseUrl = '';

  constructor(private http: HttpClient, private messageService: MessageService) { }

  msgErrorHandler() {
    this.messageService.add({severity:'error', summary:'Error', detail:'Message Content'});
  }

  msgSuccess() {
    this.messageService.add({severity:'success', summary:'Success', detail:'Message Content'})
  }

  create(courseClass: CourseClass): Observable<CourseClass> {
    return this.http.post<CourseClass>(this.baseUrl, courseClass).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<CourseClass[]> {
    return this.http.get<CourseClass[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<CourseClass> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<CourseClass>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(courseClasses: CourseClass): Observable<CourseClass> {
    const url = `${this.baseUrl}/${courseClasses.id}`;
    return this.http.put<CourseClass>(url, courseClasses).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<CourseClass> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<CourseClass>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.msgErrorHandler();
    return EMPTY;
  }
}
