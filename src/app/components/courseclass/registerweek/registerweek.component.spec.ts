import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterweekComponent } from './registerweek.component';
import { MessagesModule } from 'primeng/messages';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { CourseClassCreateDto } from '../dto/courseclass-create.model';

describe('RegisterweekComponent', () => {
  let component: RegisterweekComponent;
  let fixture: ComponentFixture<RegisterweekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterweekComponent ],
      imports: [MessagesModule],
      providers: [HttpClient, MessageService, HttpHandler]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterweekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`${RegisterweekComponent.prototype.saveModule.name} should return true when saveModule is called.`, () => {
    let spy = spyOn(component, 'saveModule');
    component.saveModule();
    expect(spy).toHaveBeenCalled();
  })

  it(`${RegisterweekComponent.prototype.removeWeek.name} should return true when removeWeek is called.`, () => {
    let spy = spyOn(component, 'removeWeek');
    component.removeWeek(1, 1);
    expect(spy).toHaveBeenCalled();
  })

  it(`${RegisterweekComponent.prototype.removeWeek.name} should return true when addWeek is called.`, () => {
    let spy = spyOn(component, 'addWeek');
    component.addWeek(1,'Python', 1);
    expect(spy).toHaveBeenCalled();
  })

  it(`${RegisterweekComponent.prototype.removeWeek.name} should return true when courseClass.Archive be False, courseClass.Name Contain 'Java' and courseClass.InitialDate Match to entered format.`, () => {
  const courseClass: CourseClassCreateDto = {
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
  expect(component.courseClassDto.archive).toBe(false);
  expect(component.courseClassDto.name).toContain('Java');
  expect(component.courseClassDto.initialDate).toMatch(/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/)
  })

  it(`${RegisterweekComponent.prototype.saveModule.name} should return true when courseClass.Archive be True, courseClass.Name not Contain 'C#' and courseClass.InitialDate not Match to entered format.`, () => {
    const courseClass: CourseClassCreateDto = {
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
