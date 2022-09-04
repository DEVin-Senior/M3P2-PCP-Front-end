import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Input } from '@angular/core';
import { TeacherService } from 'src/app/_services/teacher.service';
import { IAlert } from 'src/app/_interfaces/alert/iAlert';
import { ERROR, SUCCESS } from 'src/environments/environment';
import { AlertService } from 'src/app/_shared/alert/alert.service';
import { ITeacher } from 'src/app/_interfaces/teacher/iTeacher';

@Component({
  selector: 'app-teacher-form',
  templateUrl: './teacher-form.component.html',
  styleUrls: ['./teacher-form.component.scss']
})
export class TeacherFormComponent implements OnInit {
  alertMessage!: IAlert;
  selectedStacksNames!: Array<any>;

  formTeacher!: FormGroup;
  @Input() buttonText: string = "";
  // TODO analizar se é possível passar por aqui um objeto teacher, para que no update possa ser reaproveitado esse componente

  stackList: Array<any> = [
    { id: 1, name: 'C#' },
    { id: 2, name: '.NET' },
    { id: 3, name: 'SQL' },
    { id: 4, name: 'JAVA' },
    { id: 5, name: 'SPRING' },
    { id: 6, name: 'PRIMEFACES' },
    { id: 7, name: 'HTML' },
    { id: 8, name: 'CSS' },
    { id: 9, name: 'JAVASCRIPT' },
  ]

  constructor(private formBuilder: FormBuilder, private teacherService: TeacherService, private alertService: AlertService,) {
  }

  ngOnInit(): void {
    this.formTeacher = new FormGroup({
      name: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      stacks: (new FormArray([])),
      archived: new FormControl(false),
      isPaid: new FormControl(true)
    });

    this.addCheckboxes();
    this.getStacks();
  }

  get name() {
    return this.formTeacher.get('name')!;
  }

  get phone() {
    return this.formTeacher.get('phone')!;
  }

  get email() {
    return this.formTeacher.get('email')!;
  }

  get stacks() {
    return this.formTeacher.get('stacks')!;
  }

  get archived() {
    return this.formTeacher.get('archived')!;
  }

  get isPaid() {
    return this.formTeacher.get('isPaid')!;
  }

  getStacks() {
    this.selectedStacksNames = this.formTeacher.value.stacks
      .map((checked: any, i: any) => checked ? this.stackList[i].name : null)
      .filter((v: any) => v !== null);

    this.selectedStacksNames = this.selectedStacksNames
      .map((stack: any, i: any) => stack == 'C#' ? 'C_SHARP' : stack);

    this.selectedStacksNames = this.selectedStacksNames
      .map((stack: any, i: any) => stack == '.NET' ? 'DOT_NET' : stack);
  }

  salvar(): void {
    this.getStacks();
    this.postTeacher(this.createNewTeacher());
  }

  addCheckboxes(): void {
    this.stackList.forEach(() => this.stackFormArray.push(new FormControl(false)))
  }

  get stackFormArray() {
    return this.formTeacher.controls['stacks'] as FormArray;
  }

  postTeacher(iTeacher: ITeacher) {
    if (this.formTeacher.valid) {
      try {
        this.teacherService.insertTeacher(iTeacher).subscribe({
          next: (v) => this.messagePostTeacher(v),
          error: (e) => this.messageErrorPostTeacher(),
          complete: () => this.formTeacher.reset()
        })
      } catch (error) {
        this.messageErrorPostTeacher()
      }
    } else {
      this.alertMessage = {
        title: 'Ocorreu um erro ao cadastrar o Docente',
        message: 'Favor preencher todos os campos obrigatórios.',
        typeAlert: ERROR,
      };
      this.alertService.showGenericAlert(this.alertMessage);
    }

  }

  createNewTeacher(): ITeacher {
    return {
      name: this.name.value,
      phone: this.phone.value,
      email: this.email.value,
      skills: this.selectedStacksNames,
      archived: this.archived.value,
      isPaid: this.isPaid.value
    };
  }

  messagePostTeacher(result: any) {
    if (result.name) {
      this.alertMessage = {
        title: '',
        message: 'Docente cadastrado com sucesso!',
        typeAlert: SUCCESS,
      };
      this.alertService.showGenericAlert(this.alertMessage);

    } else {
      this.alertMessage = {
        title: 'Ocorreu um erro ao cadastrar o Docente',
        message: 'Entre em contato com o administrador do sistema.',
        typeAlert: ERROR,
      };
    }
  }

  messageErrorPostTeacher() {
    this.alertMessage = {
      title: 'Ocorreu um erro ao cadastrar o Docente',
      message: 'Entre em contato com o administrador do sistema.',
      typeAlert: ERROR,
    };
    this.alertService.showGenericAlert(this.alertMessage);
  }

}
