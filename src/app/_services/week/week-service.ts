import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Week } from 'src/app/_interfaces/week/iWeek';

@Injectable()
export class WeekService {
  private url: string = 'http://localhost:8080/api/week';

  constructor(private http: HttpClient) { }

  public getWeekDashboard(): Observable<Week> {
    return this.http.get<Week>(`${this.url}/dashboard`).pipe(
      (res) => res,
      (error) => error
    )
  }
}
