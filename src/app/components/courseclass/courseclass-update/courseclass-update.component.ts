import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseClass } from '../courseclass.model';
import { CourseClassService } from '../courseclass.service';

@Component({
  selector: 'app-courseclass-update',
  templateUrl: './courseclass-update.component.html',
  styleUrls: ['./courseclass-update.component.scss']
})
export class CourseClassUpdateComponent implements OnInit {

  courseClass: CourseClass  = {
    name: '',
    user: { id: '' },
    initialDate: '',
    endDate: '',
    skills: '',
    matrixLink: '',
    module: { id: '' },
    status: true
  };

  constructor(/*
    private classCourseService: CourseClassService,
    private router: Router,
    private route: ActivatedRoute
    */) { }

  ngOnInit(): void {  //ngOnInit está comentado aguardando configuração de backend
  
   /*const id = +this.route.snapshot.paramMap.get('id');
    this.classCourseService.readById(id).subscribe((courseClass) => {
      this.courseClass = courseClass;
    });*/
  }

  /*

  validatorInputs(): boolean { //Necessário alteração do método apenas para validação do updateCourseClass
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
  }
  */

}
