import { style } from '@angular/animations';
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
    archive: false,
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
    if (this.validatorInputs() == true){
      this.router.navigate(['/layout/turmas/atualizar/' + this.route.snapshot.paramMap.get('id') + '/modulo']);
    } else {
      this.classCourseService.errorHandler;
    }
  }

  validatorInputs(): boolean {
    const nameError = document.getElementById('name-error');
    const matrixNameError = document.getElementById('matrizname-error');
    const stackError = document.getElementById('stack-error');
    const initialError = document.getElementById('initial-error');
    const endError = document.getElementById('end-error');

    let countValidInputs = 0;

    if(nameError != null){
      if(this.courseClass.name.trim() != ''){
        nameError.classList.add('not-required');
        countValidInputs++;
        nameError.classList.remove('required');
      }else{
        nameError.classList.remove('not-required');
        nameError.classList.add('required');
      }
    }

    if(matrixNameError != null){
      if(this.courseClass.matrixLink.trim() != ''){
        matrixNameError.classList.add('not-required');
        countValidInputs++;
        matrixNameError.classList.remove('required');
      }else{
        matrixNameError.classList.remove('not-required');
        matrixNameError.classList.add('required');
      }
    }

    if(stackError != null){
      if(this.courseClass.stack.trim() != ''){
        stackError.classList.add('not-required');
        countValidInputs++;
        stackError.classList.remove('required');
      }else{
        stackError.classList.remove('not-required');
        stackError.classList.add('required');
      }
    }

    if(initialError != null){
      if(this.courseClass.initialDate === null){
        initialError.classList.add('required');
        initialError.classList.remove('not-required');
      }else{
        initialError.classList.add('not-required');
        countValidInputs++;
        initialError.classList.remove('required');
      }
    }

    if(endError != null){
      if(this.courseClass.endDate === null){
        endError.classList.add('required');
        endError.classList.remove('not-required');
      }else{
        endError.classList.add('not-required');
        countValidInputs++;
        endError.classList.remove('required');
      }
    }

    if(countValidInputs === 5){
      return true;
    }
    return false;
  }

  cancel(): void{
    this.router.navigate(['']);
  }

}
