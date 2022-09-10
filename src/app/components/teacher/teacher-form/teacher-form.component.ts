import { ActivatedRoute, Router } from '@angular/router';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Input } from '@angular/core';
import { TeacherService } from 'src/app/_services/teacher.service';
import { IAlert } from 'src/app/_interfaces/alert/iAlert';
import { ITeacher } from 'src/app/_interfaces/teacher/iTeacher';
import { AlertService } from 'src/app/_shared/alert/alert.service';
import { ERROR, ROTA_LISTA_DOCENTES, SUCCESS } from 'src/environments/environment';

@Component({
  selector: 'app-teacher-form',
  templateUrl: './teacher-form.component.html',
  styleUrls: ['./teacher-form.component.scss'],
})
export class TeacherFormComponent implements OnInit {
  alertMessage!: IAlert;
  selectedStacksNames!: Array<any>;

  formTeacher!: FormGroup;

  @Input() buttonText: string = '';

  @Input() teacherToUpdate: any = {
    id: '',
    name: '',
    phone: '',
    email: '',
    skills: [],
    archived: false,
  };

  @Output() skillsToAddCheckboxesOnUpdate = new EventEmitter();

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
  ];

  constructor(
    private formBuilder: FormBuilder,
    private teacherService: TeacherService,
    private alertService: AlertService,
    private route: ActivatedRoute,
    private redirectRouter: Router
  ) {}

  ngOnInit(): void {
    this.formTeacher = new FormGroup({
      name: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      stacks: new FormArray([]),
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

  addCheckboxes(): void {
    if (!this.isUpdate()){
      this.stackList.forEach((skill: any) => {
        this.stackFormArray.push(new FormControl(false));
      });
    } else {
      this.skillsToAddCheckboxesOnUpdate.emit({skills: this.stackList, formTeacher: this.formTeacher});
    }
  }

  get stackFormArray() {
    return this.formTeacher.controls['stacks'] as FormArray;
  }

  getStacks() {
    this.selectedStacksNames = this.formTeacher.value.stacks
      .map((checked: any, i: any) => (checked ? this.stackList[i].name : null))
      .filter((v: any) => v !== null);

    this.selectedStacksNames = this.teacherService.convertSkillFromStringToEnum(this.selectedStacksNames);
  }

  salvar(): void {
    this.getStacks();
    if (!this.isUpdate()) {
      this.postTeacher(this.createNewTeacher());
    } else {
      this.putTeacher(this.createTeacherToUpdate());
    }
  }

  isUpdate(): boolean {
    return this.route.snapshot.params['id'] ? true : false;
  }

  createNewTeacher(): ITeacher {
    return {
      name: this.name.value,
      phone: this.phone.value,
      email: this.email.value,
      skills: this.selectedStacksNames,
      archived: false,
    };
  }

  createTeacherToUpdate(): ITeacher {
    return {
      id: this.teacherToUpdate.id,
      name: this.name.value,
      phone: this.phone.value,
      email: this.email.value,
      skills: this.selectedStacksNames,
      archived: false,
    };
  }

  postTeacher(iTeacher: ITeacher) {
    if (!iTeacher || this.formTeacher.invalid) {
      this.alertMessage = {
        title: 'Ocorreu um erro ao cadastrar o Docente',
        message: 'Favor preencher todos os campos obrigatórios.',
        typeAlert: ERROR,
      };
      this.alertService.showGenericAlert(this.alertMessage);
      return;
    }

    try {
      this.teacherService.insertTeacher(iTeacher).subscribe({
        next: (v) => this.messagePostTeacher(v),
        error: (e) => this.messageErrorPostTeacher(),
        complete: () => this.redirectRouter.navigate([ROTA_LISTA_DOCENTES]),
      });
    } catch (error) {
      this.messageErrorPostTeacher();
    }
  }

  putTeacher(teacherToUpdate: ITeacher) {
    if (!teacherToUpdate || this.formTeacher.invalid) {
      this.alertMessage = {
        title: 'Ocorreu um erro ao cadastrar o Docente',
        message: 'Favor preencher todos os campos obrigatórios.',
        typeAlert: ERROR,
      };
      this.alertService.showGenericAlert(this.alertMessage);
      return;
    }

    try {
      this.teacherService.updateTeacher(teacherToUpdate).subscribe({
        next: (v) => this.messagePostTeacher(v),
        error: (e) => this.messageErrorPostTeacher(),
        complete: () => this.redirectRouter.navigate([ROTA_LISTA_DOCENTES]),
      });
    } catch (error) {
      this.messageErrorPostTeacher();
    }
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
