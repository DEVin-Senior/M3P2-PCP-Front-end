import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/api';
import { CourseclassContextService } from '../courseclass-context.service';
import { CourseClassCreateDto } from '../dto/courseclass-create.model';
import { CourseClassService } from '../courseclass.service';
import { HeaderService } from 'src/app/templates/header/header.service';
import { IAlert } from 'src/app/_interfaces/alert/iAlert';
import { WARNING } from 'src/environments/environment';
import { AlertService } from 'src/app/_shared/alert/alert.service';

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

  alertMessage!: IAlert;
  quatityModule: SelectItem[];
  selectedModule: number = 0;
  numberOfWeek: number = 0;
  regExp: RegExp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;

  constructor(private courseClassService: CourseClassService,
    private headerService: HeaderService,
    private router: Router,
    private courseClassContextService: CourseclassContextService,
    private alertService: AlertService) {
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
      console.log(typeof this.courseClassDto.moduleEntityList.length);
      this.numberOfWeek = this.selectedModule;
      console.log(this.selectedModule);

      this.courseClassContextService.setCourseClass(this.courseClassDto);
      this.router.navigate(['/layout/turmas/modulo']);
    } else {
      this.alertMessage = {
        title: 'Atenção',
        message: 'Preencha todos os campos obrigatórios.',
        typeAlert: WARNING,
      };
      this.alertService.showGenericAlert(this.alertMessage);
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
      if(this.courseClassDto.matrixLink.trim() != '' && this.regExp.test(this.courseClassDto.matrixLink.trim())){
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
      if(this.courseClassDto.initialDate === null || this.courseClassDto.initialDate === ''){
        initialError.classList.add('required');
        initialError.classList.remove('not-required');
      }else{
        initialError.classList.add('not-required');
        countValidInputs++;
        initialError.classList.remove('required');
      }
    }

    if(endError != null){
      if(this.courseClassDto.endDate === null || this.courseClassDto.initialDate === ''){
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
}
