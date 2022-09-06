import { Component, OnInit } from '@angular/core';
import { Week } from './interfaces/week';
import { WeekData } from './data/week-data';

@Component({
  selector: 'app-home-create',
  templateUrl: './home-create.component.html',
  styleUrls: ['./home-create.component.scss'],
})
export class HomeCreateComponent implements OnInit {
  weeks: Week[] =  WeekData;
  first = 0;
  rows = 10;

  constructor() {}

  ngOnInit(): void {
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
