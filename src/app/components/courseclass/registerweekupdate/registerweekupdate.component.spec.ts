import { MessageService, ConfirmationService } from 'primeng/api';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterweekupdateComponent } from './registerweekupdate.component';
import { CourseClassUpdateDto } from '../dto/courseclass-update.model';

describe('RegisterweekupdateComponent', () => {
  let component: RegisterweekupdateComponent;
  let fixture: ComponentFixture<RegisterweekupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ RegisterweekupdateComponent ],
      providers: [MessageService, ConfirmationService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterweekupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`${RegisterweekupdateComponent.prototype.saveModule.name} should return true when saveModule is called.`, () => {
    let spy = spyOn(component, 'saveModule');
    component.saveModule();
    expect(spy).toHaveBeenCalled();
  })

  it(`${RegisterweekupdateComponent.prototype.removeWeek.name} should return true when removeWeek is called.`, () => {
    let spy = spyOn(component, 'removeWeek');
    component.removeWeek(1, 1);
    expect(spy).toHaveBeenCalled();
  })

  it(`${RegisterweekupdateComponent.prototype.addWeek.name} should return true when addWeek is called.`, () => {
    let spy = spyOn(component, 'addWeek');
    component.addWeek(1, 'Java', 1);
    expect(spy).toHaveBeenCalled();
  })

  it(`${RegisterweekupdateComponent.prototype.saveModule.name} should return true when courseClass.Archive be False, courseClass.Name Contain 'Java' and courseClass.InitialDate Match to entered format.`, () => {
    const courseClass: CourseClassUpdateDto = {
      name: 'Java Senior',
      initialDate: '2022-09-09',
      endDate: '2022-09-17',
      stack: 'Java',
      matrixLink: 'Link',
      archive: false,
      moduleEntityList: [{
        id: 1,
        name: 'Java',
        weekEntityList: [{
          id: 1,
          content: 'Java',
          initialDate: '2022-09-09',
          paid: false
        }]
      }]
    }

    component.courseClassDto = courseClass;
    expect(component.courseClassDto.archive).toBeFalse();
    expect(component.courseClassDto.name).toContain('Java');
    expect(component.courseClassDto.initialDate).toMatch(/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/)
  })

  it(`${RegisterweekupdateComponent.prototype.saveModule.name} should return true when courseClass.Archive be True, courseClass.Name not Contain 'C#' and courseClass.InitialDate not Match to entered format.`, () => {
    const courseClass: CourseClassUpdateDto = {
      name: 'Java Senior',
      initialDate: '2022-09-09',
      endDate: '202209-17',
      stack: 'Java',
      matrixLink: 'Link',
      archive: true,
      moduleEntityList: [{
        id: 1,
        name: 'Java',
        weekEntityList: [{
          id: 1,
          content: 'Java',
          initialDate: '2022-09-09',
          paid: false
        }]
      }]
    }

    component.courseClassDto = courseClass;
    expect(component.courseClassDto.archive).toBeTrue();
    expect(component.courseClassDto.name).not.toContain('C#');
    expect(component.courseClassDto.initialDate).toMatch(/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/)
  })
});
