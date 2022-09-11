import { ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CheckboxModule } from 'primeng/checkbox';
import { InputMaskModule } from 'primeng/inputmask';
import { TeacherFormComponent } from './teacher-form.component';
import { TeacherService } from 'src/app/_services/teacher/teacher.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { AlertService } from 'src/app/_shared/alert/alert.service';
import { IAlert } from 'src/app/_interfaces/alert/iAlert';

describe('TeacherFormComponent', () => {
  let component: TeacherFormComponent;
  let fixture: ComponentFixture<TeacherFormComponent>;
  let service: TeacherService;
  let injector: TestBed;
  let httpClient: HttpClient;
  let httpMock: HttpTestingController;
  let mockResponse = {
    name: "Rafael",
    phone: "1199999-9999",
    email: "teste@teste.com",
    skills: ["Java"],
    archived: false
  };
  let alertService: AlertService;
  let alertMessage!: IAlert;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        ReactiveFormsModule,
        CheckboxModule,
        InputMaskModule

      ],
      declarations: [TeacherFormComponent]
    })
      .compileComponents();

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    service = TestBed.inject(TeacherService);
    injector = getTestBed();
    httpClient = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`Should return true when the form is submitted with the correct data`, () => {
    component.formTeacher.patchValue({
      name: "Rafael",
      phone: "1199999-9999",
      email: "teste@teste.com"
    });

    expect(component.formTeacher.valid).toBeTrue();
  });

  it(`Should return false when the form is submitted with the wrong data`, () => {
    component.formTeacher.patchValue({
      name: "Rafael",
      phone: "1199999-9999",
      email: ""
    });

    expect(component.formTeacher.valid).toBeFalse();
  });


  it(`#${TeacherFormComponent.prototype.postTeacher.name} should return true when postTeacher is successfully sent`, () => {
    let teacher = {
      name: "Rafael",
      phone: "1199999-9999",
      email: "teste@teste.com",
      skills: ["Java"],
      archived: false
    }

    component.formTeacher.patchValue({
      name: "Rafael",
      phone: "1199999-9999",
      email: "teste@teste.com"
    });

    expect(component.postTeacher(teacher)).toBeTrue();

  });

  it(`#${TeacherFormComponent.prototype.putTeacher.name} should return true when putTeacher is successfully sent`, () => {
    let teacher = {
      id: "1",
      name: "Rafael",
      phone: "1199999-9999",
      email: "teste@teste.com",
      skills: ["Java"],
      archived: false
    }

    component.formTeacher.patchValue({
      name: "Rafael",
      phone: "1199999-9999",
      email: "teste@teste.com"
    });

    expect(component.putTeacher(teacher)).toBeTrue();

  });

  it(`#${TeacherFormComponent.prototype.createNewTeacher.name} create new teacher`, () => {
    let teacher = {
      name: "Rafael",
      phone: "1199999-9999",
      email: "teste@teste.com",
      skills: ["Java"],
      archived: false
    }

    component.formTeacher.patchValue({
      name: "Rafael",
      phone: "1199999-9999",
      email: "teste@teste.com",
      skills: [],
      archived: false
    });
    component.selectedStacksNames = ['Java'];

    expect(component.createNewTeacher()).toEqual(teacher);

  });

  it(`#${TeacherFormComponent.prototype.createTeacherToUpdate.name} create teacher to update teacher`, () => {
    let teacher =  {
        id: "1",
        name: "Rafael",
        phone: "1199999-9999",
        email: "teste@teste.com",
        skills: ["Java"],
        archived: false
    }

    component.formTeacher.patchValue({
        name: "Rafael",
        phone: "1199999-9999",
        email: "teste@teste.com",
        skills: [],
        archived: false
    });
    component.selectedStacksNames = ['Java'];
    component.teacherToUpdate.id = "1";

    expect(component.createTeacherToUpdate()).toEqual(teacher);

  });

});



