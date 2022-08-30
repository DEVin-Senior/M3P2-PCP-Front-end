import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError, Observable, EMPTY } from 'rxjs';
import { CourseClass } from './courseclass.model';

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
    module: { id: '' }
  }

  baseUrl = '';

  constructor(private http: HttpClient) { }

  /*showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 2000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }*/

  create(courseClass: CourseClass): Observable<CourseClass> {
    return this.http.post<CourseClass>(this.baseUrl, courseClass).pipe(
      map((obj) => obj),
      //catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<CourseClass[]> {
    return this.http.get<CourseClass[]>(this.baseUrl).pipe(
      map((obj) => obj),
      //catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<CourseClass> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<CourseClass>(url).pipe(
      map((obj) => obj),
      //catchError((e) => this.errorHandler(e))
    );
  }

  update(courseClasses: CourseClass): Observable<CourseClass> {
    const url = `${this.baseUrl}/${courseClasses.id}`;
    return this.http.put<CourseClass>(url, courseClasses).pipe(
      map((obj) => obj),
      //catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<CourseClass> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<CourseClass>(url).pipe(
      map((obj) => obj),
      //catchError((e) => this.errorHandler(e))
    );
  }

  /*errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY;
  }*/
}
