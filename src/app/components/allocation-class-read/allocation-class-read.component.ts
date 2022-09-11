import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/templates/header/header.service';
import { iAllocation } from 'src/app/_interfaces/allocation/iAllocation';
import { AllocationService } from 'src/app/_services/allocation/allocation-service';
import { location } from './interface/date';

@Component({
  selector: 'app-allocation-class-read',
  templateUrl: './allocation-class-read.component.html',
  styleUrls: ['./allocation-class-read.component.scss']
})
export class AllocationClassReadComponent implements OnInit {
  dates:string[] = ["S/A","S/A","S/A","S/A","S/A","S/A"]
  teachers: location[] = []

  public allocationData: iAllocation | any;

  public allocationWeeks: number | any;

  selectedDate!: string;
  monthNames!:string[]

  constructor( 
    private headerService: HeaderService,
    private allocationService: AllocationService,
    private router: Router
    ) { 
    headerService.headerData = {
      title: 'Alocações',
      routerUrl: 'layout/alocacoes'
    }
  }

  ngOnInit(): void {
    
    this.allocationService.getAllocationItems().subscribe(
      res => this.allocationData = res,
      error => error
    )
    
    setTimeout(() => {
      this.monthNames = this.allocationData.monthsDropdown;
      console.log(this.allocationData)
      var mydate = new Date(this.allocationData[5].weekInitialDates[0]);
      console.log(mydate.getDay());
    },2000)
  }

  allocateTeacher(id : string){
    /* this.router.navigate(['layout/alocar']) */
  }

}
