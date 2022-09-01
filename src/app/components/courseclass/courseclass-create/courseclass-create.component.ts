import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseClass } from '../courseclass.model';
import { CourseClassService } from '../courseclass.service';

@Component({
  selector: 'app-courseclass-create',
  templateUrl: './courseclass-create.component.html',
  styleUrls: ['./courseclass-create.component.scss']
})
export class CourseClassCreateComponent implements OnInit {
  courseClass: CourseClass = {
    name: '',
    user: { id: '' },
    initialDate: '',
    endDate: '',
    skills: '',
    matrixLink: '',
    module: { id: '' },
    status: true
  }

  constructor(/*private courseClassService: CourseClassService, private router: Router*/) { }

  ngOnInit(): void {
  }

  /*
  validatorInputs(): boolean { //Necessário alteração do método apenas para validação do updateCourseClass
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
  }
  */
}
