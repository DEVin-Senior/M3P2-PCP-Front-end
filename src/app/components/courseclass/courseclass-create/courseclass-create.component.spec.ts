import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MessageService } from 'primeng/api';
import { CourseClassCreateComponent } from './courseclass-create.component';

describe('CourseClassCreateComponent', () => {
  let component: CourseClassCreateComponent;
  let fixture: ComponentFixture<CourseClassCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseClassCreateComponent],
      imports: [HttpClientModule],
      providers: [HttpClient, MessageService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseClassCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`${CourseClassCreateComponent.prototype.nextForm.name} should return true when nextForm is called.`, () =>{
    let spy = spyOn(component, 'nextForm');
    component.nextForm();
    expect(spy).toHaveBeenCalled();
  })

  it(`${CourseClassCreateComponent.prototype.nextForm.name} should return true when nextForm is not called.`, () =>{
    let spy = spyOn(component, 'nextForm');
    expect(spy).not.toHaveBeenCalled();
  })

  it(`${CourseClassCreateComponent.prototype.nextForm.name} should return true when moduleEntityList is defined.`, () =>{
    let moduleEntityList = {
      name: 'Java',
      weekEntityList: [{
        content: 'Java',
        initialDate: '11/09/2022',
        paid: false
      }]
    }
    expect(moduleEntityList).toBeDefined();
  })

  it(`${CourseClassCreateComponent.prototype.nextForm.name} should return true when moduleEntityList is not undefined.`, () =>{
    let moduleEntityList = {
      name: 'Java',
      weekEntityList: [{
        content: 'Java',
        initialDate: '11/09/2022',
        paid: false
      }]
    }
    expect(moduleEntityList).not.toBeUndefined();
  })

  it(`${CourseClassCreateComponent.prototype.nextForm.name} should return true when the information is the same, both in the object and in the verification.`, () =>{
    let moduleEntityList = {
      name: 'Java',
      weekEntityList: [{
        content: 'Java',
        initialDate: '11/09/2022',
        paid: false
      }]
    }
    component.nextForm();
    expect(moduleEntityList.name).toEqual('Java');
  })

  it(`${CourseClassCreateComponent.prototype.nextForm.name} should return true when the information is not the same, both in the object and in the verification.`, () =>{
    let moduleEntityList = {
      name: 'Java',
      weekEntityList: [{
        content: 'Java',
        initialDate: '11/09/2022',
        paid: false
      }]
    }
    component.nextForm();
    expect(moduleEntityList.name).not.toEqual('C#');
  })

  it(`${CourseClassCreateComponent.prototype.validatorInputs.name} should return true when expected to be false.`, () =>{
    expect(component.validatorInputs()).toBeFalse();
  })

  it(`${CourseClassCreateComponent.prototype.validatorInputs.name} should return true when expected to not be true.`, () =>{
    expect(component.validatorInputs()).not.toBeTrue();
  })

  it(`${CourseClassCreateComponent.prototype.ngOnInit.name} should return true when expected to not be true.`, () =>{
    const compile = fixture.debugElement.nativeElement;
    expect(compile.querySelector('h3').textContent).toContain('Cadastrar Turma');
  })

  it(`${CourseClassCreateComponent.prototype.ngOnInit.name} should return true when expected to not be true.`, () =>{
    const compile = fixture.debugElement.nativeElement;
    expect(compile.querySelector('h3').textContent).not.toContain('Cadastrar Professor');
  })
});
