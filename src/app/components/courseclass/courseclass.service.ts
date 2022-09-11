import { CourseClassArchiveDto } from './dto/courseclass-archive.model';
import { CourseClassUpdateDto } from './dto/courseclass-update.model';
import { CourseClassCreateDto } from './dto/courseclass-create.model';
import { CourseClassReadDto } from './dto/courseclass-read.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError, Observable, EMPTY } from 'rxjs';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class CourseClassService {
  courseClass: CourseClassCreateDto = {
    name: '',
    initialDate: '',
    endDate: '',
    stack: '',
    matrixLink: '',
    archive: false,
    moduleEntityList: [{
      name: '',
      weekEntityList: [{
        content: '',
        initialDate: '',
        paid: false
      }]
    }]
  }

  baseUrl = '/api/turmas';

  constructor(private http: HttpClient, private messageService: MessageService) { }

  msgErrorHandler() {
    this.messageService.add({severity:'error', summary:'Error', detail:'Message Content'});
  }

  msgSuccess() {
    this.messageService.add({severity:'success', summary:'Success', detail:'Message Content'})
  }

  create(courseClass: CourseClassCreateDto): Observable<CourseClassCreateDto> {
    return this.http.post<CourseClassCreateDto>(this.baseUrl, courseClass).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<CourseClassReadDto[]> {
    return this.http.get<CourseClassReadDto[]>(this.baseUrl+'/listar').pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<CourseClassUpdateDto> {
    const url = `${this.baseUrl}/listar/${id}`;
    return this.http.get<CourseClassUpdateDto>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(courseClasses: CourseClassUpdateDto): Observable<CourseClassUpdateDto> {
    const url = `${this.baseUrl}/${courseClasses.id}`;
    return this.http.put<CourseClassUpdateDto>(url, courseClasses).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  archive(courseClass: CourseClassArchiveDto){
    const body = {
      classId: courseClass.classId,
      archived: courseClass.archive
    };
    return this.http.patch(`${this.baseUrl}/arquivar`, body);
  }

  errorHandler(e: any): Observable<any> {
    this.msgErrorHandler();
    return EMPTY;
  }
}
