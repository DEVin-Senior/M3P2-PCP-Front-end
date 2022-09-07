import { Component, OnInit } from '@angular/core';
import { Alocacao } from './data/data';

@Component({
  selector: 'app-allocation-class-read',
  templateUrl: './allocation-class-read.component.html',
  styleUrls: ['./allocation-class-read.component.scss']
})
export class AllocationClassReadComponent implements OnInit {
  datas:string[] = ["04/07","11/07","18/07","25/07","01/08","08/08"]
  alocacoes: Alocacao[] = [
    {
      data: "14/08",
      docente: "alan",
      turma: "Dev In House"
    },
    {
      data: "14/08",
      docente: "adan",
      turma: "Dev In House"
    },
    {
      data: "14/08",
      docente: "carlos",
      turma: "Dev In House"
    },
    {
      data: "14/08",
      docente: "carlos",
      turma: "Dev In House"
    },
    {
      data: "14/08",
      docente: "carlos",
      turma: "Dev In House"
    },
    {
      data: "14/08",
      docente: "carlos",
      turma: "Dev In House"
    },
    
  ]
  
  constructor() { }

  ngOnInit(): void {
  }


}
