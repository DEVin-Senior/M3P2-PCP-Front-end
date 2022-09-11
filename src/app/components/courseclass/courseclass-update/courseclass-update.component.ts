import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectItem } from 'primeng/api';
import { Observable } from 'rxjs';
import { CourseClassService } from '../courseclass.service';
import { CourseClassReadDto } from '../dto/courseclass-read.model';
import {CourseClassUpdateDto} from '../dto/courseclass-update.model'

@Component({
  selector: 'app-courseclass-update',
  templateUrl: './courseclass-update.component.html',
  styleUrls: ['./courseclass-update.component.scss']
})
export class CourseClassUpdateComponent implements OnInit {
  
  courseClass: CourseClassUpdateDto =   {
    name: '',
    initialDate: '',
    endDate: '',
    stack:'',    
    matrixLink: '',
    archive:false,
    moduleEntityList: [{
      name: '',
      weekEntityList: [{
        content:'',
        initialDate: '',
        paid: false
      }]
    }]
  };

   constructor(
    private classCourseService: CourseClassService,
    private router: Router,
    private route: ActivatedRoute    
  ) { }

  ngOnInit(): void {  //ngOnInit está comentado aguardando configuração de backend 
    const id = this.route.snapshot.paramMap.get('id');    
    this.classCourseService.readById(Number(id)).subscribe((course) => {
      
    let year = course.initialDate.split("-")[0];
    let month = course.initialDate.split("-")[1];
    let day = course.initialDate.split("-")[2];
    let initialDate = `${day}/${month}/${year}`;
    course.initialDate=initialDate; 

    year = course.endDate.split("-")[0];
    month = course.endDate.split("-")[1];
    day = course.endDate.split("-")[2];
    let endDate = `${day}/${month}/${year}`;
    course.endDate=endDate; 


    console.log(this.courseClass);
      
    this.courseClass = course;
    });
  }

  nextForm() {    
    this.router.navigate(['/layout/turmas/atualizar/' + this.route.snapshot.paramMap.get('id') + '/modulo']);
  }
 /* validatorInputs(): boolean { //Necessário alteração do método apenas para validação do updateCourseClass
    return true
  }

  updateCourseClass(): void {
    if(this.validatorInputs() == true){
      this.classCourseService.update(this.courseClass).subscribe(() => {
        this.classCourseService.msgSuccess();
        this.router.navigate(['']);
      });
    }else{
      this.classCourseService.msgErrorHandler();
    }
  }
  
  cancel(): void{
    this.router.navigate(['']);
  }*/

}
