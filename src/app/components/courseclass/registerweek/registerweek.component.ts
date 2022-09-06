import { Component, OnInit } from '@angular/core';
import { Week } from './registerweek.model';

@Component({
  selector: 'app-registerweek',
  templateUrl: './registerweek.component.html',
  styleUrls: ['./registerweek.component.scss']
})
export class RegisterweekComponent implements OnInit {

  weeks: Week[] = [{content:""}, {content:""}, {content:""}];

  constructor() {

  }

  ngOnInit(): void {
  }

}
