import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MessageService } from 'primeng/api';
import { CourseClassUpdateComponent } from './courseclass-update.component';

fdescribe('CourseClassUpdateComponent', () => {
  let component: CourseClassUpdateComponent;
  let fixture: ComponentFixture<CourseClassUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseClassUpdateComponent ],
      imports: [HttpClientModule, RouterTestingModule],
      providers: [MessageService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseClassUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`${CourseClassUpdateComponent.prototype.nextForm.name} should return true when nextForm is not called.`, () =>{
    let spy = spyOn(component, 'nextForm');
    expect(spy).not.toHaveBeenCalled();
  });

  it(`${CourseClassUpdateComponent.prototype.nextForm.name} should return true when nextForm is called.`, () =>{
    let spy = spyOn(component, 'nextForm');
    component.nextForm();
    expect(spy).toHaveBeenCalled();
  });

  it(`${CourseClassUpdateComponent.prototype.nextForm.name} should return true when validadorInputs is not called.`, () =>{
    let spy = spyOn(component, 'validatorInputs');
    expect(spy).not.toHaveBeenCalled();
  });

  it(`${CourseClassUpdateComponent.prototype.validatorInputs.name}  should return true when validadorInputs is called.`, () =>{
    let spy = spyOn(component, 'validatorInputs');
    component.validatorInputs();
    expect(spy).toHaveBeenCalled();
  });

  it(`${CourseClassUpdateComponent.prototype.validatorInputs.name} should return true when expected to be false.`, () =>{
    expect(component.validatorInputs()).toBeFalse();
  });

  it(`${CourseClassUpdateComponent.prototype.validatorInputs.name} should return true when expected to not be true.`, () =>{
    expect(component.validatorInputs()).not.toBeTrue();
  });

  it(`${CourseClassUpdateComponent.prototype.ngOnInit.name} should return true when expected to not be true.`, () =>{
    const compile = fixture.debugElement.nativeElement;
    expect(compile.querySelector('h3').textContent).toContain('Editar Turma');
  });

  it(`${CourseClassUpdateComponent.prototype.ngOnInit.name} should return true when expected to not be true.`, () =>{
    const compile = fixture.debugElement.nativeElement;
    expect(compile.querySelector('h3').textContent).not.toContain('Editar Professor');
  });
});
