import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/templates/header/header.service';

@Component({
  selector: 'app-allocation-class-create',
  templateUrl: './allocation-class-create.component.html',
  styleUrls: ['./allocation-class-create.component.scss']
})
export class AllocationClassCreateComponent implements OnInit {

  constructor( private headerService: HeaderService) { 
    headerService.headerData = {
      title: 'Alocações',
      routerUrl: 'layout/alocacoes/adicionar/{id}'
    }
  }

  ngOnInit(): void {
  }

}
