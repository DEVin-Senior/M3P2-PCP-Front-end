import { Component, OnInit } from '@angular/core';
import { Week } from './registerweek.model';

@Component({
  selector: 'app-registerweek',
  templateUrl: './registerweek.component.html',
  styleUrls: ['./registerweek.component.scss']
})
export class RegisterweekComponent implements OnInit {

  weeks: Week[] = [{content:"", isCompleted:false}];
  newWeek: string = "";
  // weeks: Week[] = [{content:""}, {content:""}, {content:""}];

  constructor() { }

  ngOnInit(): void { }

  addWeek() {
    if (this.newWeek.trim() != "") {
      let week = new Week();
      week.content = this.newWeek;
      week.isCompleted = true;
      this.weeks.push(week);
    } else {
      alert("Preenchimento do campo obrigatório!");
    }
  }
}
