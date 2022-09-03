import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-create',
  templateUrl: './teacher-create.component.html',
  styleUrls: ['./teacher-create.component.scss']
})
export class TeacherCreateComponent implements OnInit {

  cadastrar: string = 'Cadastrar';

  constructor() { }

  ngOnInit(): void {
  }

}
