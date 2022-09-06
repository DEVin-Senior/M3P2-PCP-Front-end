import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.scss']
})
export class TeacherListComponent implements OnInit {

  teachers: {name: string, phone: string, mail: string, stacks: string}[] =  [
    {
      name: "Marcola",
      phone: "(32)98811-9292",
      mail: "marcola@dev.com",
      stacks: "teste2"
    },
    {
      name: "Francisco Santana",
      phone: "(32)98811-9292",
      mail: "francisco@dev.com",
      stacks: "teste"
    },
    {
      name: "Franciscão Santana",
      phone: "(32)98811-9292",
      mail: "francisco@dev.com",
      stacks: "teste"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
