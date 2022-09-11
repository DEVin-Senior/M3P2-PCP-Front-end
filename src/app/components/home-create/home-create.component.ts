import { Component, OnInit } from '@angular/core';
import { Week } from '../../_interfaces/week/iWeek';
import { WeekData } from './data/week-data';
import { HeaderService } from 'src/app/templates/header/header.service';
import { WeekService } from 'src/app/_services/week/week-service';

@Component({
  selector: 'app-home-create',
  templateUrl: './home-create.component.html',
  styleUrls: ['./home-create.component.scss'],
})
export class HomeCreateComponent implements OnInit {
  public weeks: Week | any;

  first = 0;
  rows = 10;

  constructor(private headerService: HeaderService, private weekService: WeekService) {
    headerService.headerData = {
      title: 'DashBoard',
      routerUrl: 'layout/home'
    }
  }

  ngOnInit(): void {
    this.weekService.getWeekDashboard().subscribe(
      res => this.weeks = res,
      error => error
    )
  }

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.weeks ? this.first === this.weeks.length - this.rows : true;
  }

  isFirstPage(): boolean {
    return this.weeks ? this.first === 0 : true;
  }
}
