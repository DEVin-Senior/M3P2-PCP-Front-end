import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/api';
import { CourseclassContextService } from '../courseclass-context.service';
import { CourseClassCreateDto } from '../dto/courseclass-create.model';
import { CourseClassService } from '../courseclass.service';
import { HeaderService } from 'src/app/templates/header/header.service';

// interface courseModule {
//   named: string;
// }

@Component({
  selector: 'app-courseclass-create',
  templateUrl: './courseclass-create.component.html',
  styleUrls: ['./courseclass-create.component.scss']
})

export class CourseClassCreateComponent implements OnInit {

  courseClassDto: CourseClassCreateDto = {
    name: '',
    initialDate: '',
    endDate: '',
    stack: '',
    matrixLink: '',
    archive: false,
    moduleEntityList: [{
      name: '',
      weekEntityList: [{
        content: '',
        initialDate: '',
        paid: false
      }]
    }]
  }

  quatityModule: SelectItem[];
  selectedModule: number = 0;
  numberOfWeek: number = 0;

  constructor(/*private courseClassService: CourseClassService,*/ private headerService: HeaderService, private router: Router, private courseClassContextService: CourseclassContextService) {
    this.quatityModule = [
      { label: '1', value: 1 },
      { label: '2', value: 2 },
      { label: '3', value: 3 },
      { label: '4', value: 4 }
    ]
    headerService.headerData = {
      title: 'Turmas',
      routerUrl: 'layout/turmas/adicionar'
    }
  }

  ngOnInit(): void {

  }

nextForm() {
    if (this.selectedModule != 1) {
      for (let i = this.selectedModule - 1; i > 0; i--) {
        this.courseClassDto.moduleEntityList.push({
          name: '',
          weekEntityList: [{
            content: '',
            initialDate: '',
            paid: false
          }]
        });
      }
    } 

    this.numberOfWeek = this.courseClassDto.moduleEntityList.length;
    // console.log(typeof this.numberOfWeek);
    console.log(typeof this.courseClassDto.moduleEntityList.length);
    this.numberOfWeek = this.selectedModule;
    console.log(this.selectedModule);
    
    this.courseClassContextService.setCourseClass(this.courseClassDto);
    this.router.navigate(['layout/turmas/modulo']);
  }

  /* validatorInputs(): boolean { //Necessário alteração do método apenas para validação do updateCourseClass
     return true
   }
 
   createCourseClass(): void {
     // if (this.validatorInputs() == true) {
     //   this.courseClassService.create(this.courseClass).subscribe(() => {
     //     this.courseClassService.msgSuccess();
     //     this.router.navigate(['']);
     //   });
     // } else {
     //   this.courseClassService.msgErrorHandler();
     // }
   }
 
 
   cancel(): void {
     this.router.navigate(['']);
   }*/
}