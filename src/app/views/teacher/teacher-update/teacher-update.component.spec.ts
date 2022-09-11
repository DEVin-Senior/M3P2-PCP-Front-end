import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { ITeacher } from 'src/app/_interfaces/teacher/iTeacher';
import { TeacherService } from 'src/app/_services/teacher.service';
import { TeacherUpdateComponent } from './teacher-update.component';

describe('TeacherUpdateComponent', () => {
  let component: TeacherUpdateComponent;
  let fixture: ComponentFixture<TeacherUpdateComponent>;
  let teacherFormGroup: FormGroup;
  let mockTeacher: ITeacher;
  let teacherService: jasmine.SpyObj<TeacherService>;
  const mockStackList: Array<any> = [
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

  const mockActivatedRoute = {
    snapshot: {
      params: {
        id: '1'
  }}};

  beforeEach(async () => {
    teacherService = jasmine.createSpyObj('TeacherService', ['getTeacherById', 'convertSkillFromEnumToString']);
    await TestBed.configureTestingModule({
      declarations: [ TeacherUpdateComponent],
      imports: [ HttpClientTestingModule ],
      providers: [
        {provide: ActivatedRoute, useValue: mockActivatedRoute },
        {provide: TeacherService, useValue: teacherService}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    teacherFormGroup = new FormGroup({
      name: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      stacks: new FormArray([]),
    });
    mockTeacher = {
      id: '1',
      name: 'Jesus Cristo',
      phone: '4799723-4112',
      email: 'jesus.cristo@gmail.com',
      skills: ['JAVA', 'SPRING', 'SQL'],
      archived: false,
    };
    component.skillsFormControl.skills = mockStackList;
    component.skillsFormControl.formTeacher = teacherFormGroup;
  });

  it('should create teacher update component', () => {
    expect(component).toBeTruthy();
  });

  it(`... #${TeacherUpdateComponent.prototype.skillsBuilderToUpdate.name} should build teacher's skills to update`, () => {
    //Arrange
    const evento = {
      skills: mockStackList,
      formTeacher: teacherFormGroup
    }

    //Act
    component.skillsBuilderToUpdate(evento);

    //Assert
    expect(component.skillsFormControl.skills).toEqual(evento.skills);
    expect(component.skillsFormControl.formTeacher).toEqual(evento.formTeacher);
  });

  it(`... #${TeacherUpdateComponent.prototype.getTeacherId.name} should get teacher ID from edit route`, () => {
    //Act
    component.getTeacherId();

    //Assert
    expect(component.getTeacherId()).toEqual(mockActivatedRoute.snapshot.params['id']);
  });

  it(`... #${TeacherUpdateComponent.prototype.getTeacherToUpdate.name} should update teacher when ID is valid`, async() => {
    //Arrange
    let observableMockTeacher: Observable<ITeacher> = new Observable((observer) => {
      observer.next(mockTeacher);
    });
    teacherService.getTeacherById.withArgs('1').and.returnValues(observableMockTeacher);
    teacherService.convertSkillFromEnumToString.withArgs(mockTeacher.skills).and.returnValues(mockTeacher.skills);

    //Act
    component.getTeacherToUpdate('1');

    //Assert
    expect(component.teacher).toEqual(mockTeacher);
    expect(teacherService.getTeacherById).toHaveBeenCalledTimes(2);
    expect(teacherService.convertSkillFromEnumToString).toHaveBeenCalledTimes(1);
  });

  it(`... #${TeacherUpdateComponent.prototype.getTeacherToUpdate.name} should throw exception when teacher ID is null`, async () => {
    //Assert
     await expectAsync(component.getTeacherToUpdate('')).toBeRejectedWith(new Error(`Could not get teacher because ID is null`));

  });

  it(`... #${TeacherUpdateComponent.prototype.mergeTeacher.name} should merge when teacher is valid`, () => {
    //Act
    component.mergeTeacher(mockTeacher);

    //Assert
    expect(component.teacher.id).toEqual(mockTeacher.id);
    expect(component.teacher.name).toEqual(mockTeacher.name);
    expect(component.teacher.phone).toEqual(mockTeacher.phone);
    expect(component.teacher.email).toEqual(mockTeacher.email);
    expect(component.teacher.skills).toEqual(mockTeacher.skills);
    expect(component.teacher.archived).toBeFalse();
  });

  it(`... #${TeacherUpdateComponent.prototype.mergeTeacher.name} should throw exception when teacher is null`, () => {
    //Assert
     expect(() => {
      component.mergeTeacher(null)
     }).toThrow(new Error(`Teacher not found`));
  });

  it(`... #${TeacherUpdateComponent.prototype.addCheckboxes.name} should build form controls when teacher skills is valid`, () => {
    //Arrange
    const stacksArrayForm = teacherFormGroup.controls['stacks'] as FormArray;

    stacksArrayForm.patchValue([
      new FormControl(true),
      new FormControl(true),
      new FormControl(true),
      new FormControl(false),
      new FormControl(false),
      new FormControl(false),
      new FormControl(false),
      new FormControl(false),
      new FormControl(false),
    ]);

    teacherService.convertSkillFromEnumToString.withArgs(mockTeacher.skills).and.returnValues(mockTeacher.skills);

    //Act
    component.addCheckboxes(mockTeacher.skills);
    expect(teacherService.convertSkillFromEnumToString).toHaveBeenCalledTimes(1);

    //Assert
    expect(component.stackFormArray).toEqual(stacksArrayForm);
  });

  it(`... #${TeacherUpdateComponent.prototype.addCheckboxes.name} should throw exception when teacher skills is null`, () => {
    //Assert
     expect(() => {
      component.addCheckboxes(null)
     }).toThrow(new Error("The teacher's skills not found"));
  });

  it(`... #${TeacherUpdateComponent.prototype.getSkillFormControl.name} should get true when skill name exists in teacher skills`, () => {
    //Act
    let response = component.getSkillFormControl('JAVA', mockTeacher.skills);

    //Assert
    expect(response.getRawValue()).toBeTrue();
  });

  it(`... #${TeacherUpdateComponent.prototype.getSkillFormControl.name} should get false when skill name not exists in teacher skills`, () => {
    //Act
    let response = component.getSkillFormControl('JAVASCRIPT', mockTeacher.skills);

    //Assert
    expect(response.getRawValue()).toBeFalse();
  });

  it(`... #${TeacherUpdateComponent.prototype.getSkillFormControl.name} should get false when teacher skills is empty`, () => {
    //Act
    let response = component.getSkillFormControl('JAVASCRIPT', []);

    //Assert
    expect(response.getRawValue()).toBeFalse();
  });

});
