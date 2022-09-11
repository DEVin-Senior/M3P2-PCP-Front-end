import { TitleCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectItem } from 'primeng/api';
import { Observable } from 'rxjs';
import { CourseClassService } from '../courseclass.service';
import { CourseClassReadDto } from '../dto/courseclass-read.model';
import { CourseclassUpdateContextService } from '../courseclassUpdate-context.service';
import {CourseClassUpdateDto} from '../dto/courseclass-update.model'

@Component({
  selector: 'app-courseclass-update',
  templateUrl: './courseclass-update.component.html',
  styleUrls: ['./courseclass-update.component.scss']
})
export class CourseClassUpdateComponent implements OnInit {
  
  regExp: RegExp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
  globalInitialdate:any;
  globalEndDate:any;

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
    private courseclassUpdateContextService : CourseclassUpdateContextService,
    private classCourseService: CourseClassService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {  //ngOnInit está comentado aguardando configuração de backend
    const id = this.route.snapshot.paramMap.get('id');
    this.classCourseService.readById(Number(id)).subscribe((course) => {
    
   this.globalInitialdate = course.initialDate;
   this.globalEndDate = course.endDate;

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
   if(this.validatorInputs()){
    if(typeof this.courseClass.initialDate === "string"){
      this.courseClass.initialDate = this.globalInitialdate;
    }
    if(typeof this.courseClass.endDate === "string"){
      this.courseClass.endDate = this.globalEndDate;
    }
    this.courseClass.id= Number(this.route.snapshot.paramMap.get('id'));
    this.courseclassUpdateContextService.setCourseClass(this.courseClass);    
    this.router.navigate(['/layout/turmas/atualizar/' + this.route.snapshot.paramMap.get('id') + '/modulo']);
   }else{
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
      if(this.courseClass.matrixLink.trim() != '' && this.regExp.test(this.courseClass.matrixLink.trim())){
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
      if(this.courseClass.initialDate === null || this.courseClass.initialDate === undefined){
        initialError.classList.add('required');
        initialError.classList.remove('not-required');
      }else{
        initialError.classList.add('not-required');
        countValidInputs++;
        initialError.classList.remove('required');
      }
    }

    if(endError != null){
      if(this.courseClass.endDate === null || this.courseClass.endDate === undefined){
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