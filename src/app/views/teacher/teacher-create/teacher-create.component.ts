import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/templates/header/header.service';

@Component({
  selector: 'app-teacher-create',
  templateUrl: './teacher-create.component.html',
  styleUrls: ['./teacher-create.component.scss']
})
export class TeacherCreateComponent implements OnInit {

  cadastrar: string = 'Cadastrar';

  constructor(private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Docentes',
      routerUrl: 'layout/docente/adicionar'
    }
  }

  ngOnInit(): void {
  }

}
