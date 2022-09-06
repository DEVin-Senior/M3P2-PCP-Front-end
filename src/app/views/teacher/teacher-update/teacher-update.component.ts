import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-update',
  templateUrl: './teacher-update.component.html',
  styleUrls: ['./teacher-update.component.scss']
})
export class TeacherUpdateComponent implements OnInit {

  salvar: string = 'Salvar';

  constructor() { }

  ngOnInit(): void {
  }

}
