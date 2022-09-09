import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/templates/header/header.service';
import { location } from './interface/date';

@Component({
  selector: 'app-allocation-class-read',
  templateUrl: './allocation-class-read.component.html',
  styleUrls: ['./allocation-class-read.component.scss']
})
export class AllocationClassReadComponent implements OnInit {
  dates:string[] = ["04/07","11/07","18/07","25/07","01/08","08/08"]
  alocation: location[] = [
    {
      date: "14/08",
      teacher: "alan",
      class: "Dev In House"
    },
    {
      date: "14/08",
      teacher: "adan",
      class: "Dev In House"
    },
    {
      date: "14/08",
      teacher: "carlos",
      class: "Dev In House"
    },
    {
      date: "14/08",
      teacher: "carlos",
      class: "Dev In House"
    },
    {
      date: "14/08",
      teacher: "carlos",
      class: "Dev In House"
    },
    {
      date: "14/08",
      teacher: "carlos",
      class: "Dev In House"
    },
  ]
  constructor( private headerService: HeaderService) { 
    headerService.headerData = {
      title: 'Alocações',
      routerUrl: 'layout/alocacoes'
    }
  }

  ngOnInit(): void {
  }
}
