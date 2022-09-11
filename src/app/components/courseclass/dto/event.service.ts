import { content } from './event-read.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError, Observable, EMPTY } from 'rxjs';
import { Message, MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  baseUrl = '/api/historico';

  constructor(private http: HttpClient, private messageService: MessageService) { }

  msgErrorHandler() {
    this.messageService.add({severity:'error', summary:'Error', detail:'Message Content'});
  }

  msgSuccess() {
    this.messageService.add({severity:'success', summary:'Success', detail:'Message Content'})
  }

  read(): Observable<content[]> {
    return this.http.get<content[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<content[]> {
    const url = `${this.baseUrl}/turmas/${id}`;
    return this.http.get<content>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.msgErrorHandler();
    return EMPTY;
  }
}
