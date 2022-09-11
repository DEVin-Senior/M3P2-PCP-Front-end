import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/api';
import { CourseclassContextService } from '../courseclass-context.service';
import { CourseClassCreateDto } from '../dto/courseclass-create.model';
import { CourseClassService } from '../courseclass.service';
import { HeaderService } from 'src/app/templates/header/header.service';

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

  constructor(private courseClassService: CourseClassService, private headerService: HeaderService, private router: Router, private courseClassContextService: CourseclassContextService) {
    this.quatityModule = [
      { label: '1', value: 1 },
      { label: '2', value: 2 },
      { label: '3', value: 3 },
      { label: '4', value: 4 }
    ]
    headerService.headerData = {
      title: 'Turmas',
      routerUrl: '/layout/turmas/adicionar'
    }
  }

  ngOnInit(): void { }

  nextForm() {
    if (this.validatorInputs()){
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
      this.router.navigate(['/layout/turmas/modulo']);
    } else {
      this.courseClassService.errorHandler;
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
      if(this.courseClassDto.name.trim() != ''){
        nameError.classList.add('not-required');
        countValidInputs++;
        nameError.classList.remove('required');
      }else{
        nameError.classList.remove('not-required');
        nameError.classList.add('required');
      }
    }

    if(matrixNameError != null){
      if(this.courseClassDto.matrixLink.trim() != ''){
        matrixNameError.classList.add('not-required');
        countValidInputs++;
        matrixNameError.classList.remove('required');
      }else{
        matrixNameError.classList.remove('not-required');
        matrixNameError.classList.add('required');
      }
    }

    if(stackError != null){
      if(this.courseClassDto.stack.trim() != ''){
        stackError.classList.add('not-required');
        countValidInputs++;
        stackError.classList.remove('required');
      }else{
        stackError.classList.remove('not-required');
        stackError.classList.add('required');
      }
    }

    if(initialError != null){
      if(this.courseClassDto.initialDate === null){
        initialError.classList.add('required');
        initialError.classList.remove('not-required');
      }else{
        initialError.classList.add('not-required');
        countValidInputs++;
        initialError.classList.remove('required');
      }
    }

    if(endError != null){
      if(this.courseClassDto.endDate === null){
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


  /*createCourseClass(): void {
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
