import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseClassService } from '../courseclass.service';
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
    /*private classCourseService: CourseClassService,
    private router: Router,
    private route: ActivatedRoute*/
  ) { }

  ngOnInit(): void {  //ngOnInit está comentado aguardando configuração de backend
  
   /*const id = +this.route.snapshot.paramMap.get('id');
    this.classCourseService.readById(id).subscribe((courseClass) => {
      this.courseClass = courseClass;
    });*/
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
