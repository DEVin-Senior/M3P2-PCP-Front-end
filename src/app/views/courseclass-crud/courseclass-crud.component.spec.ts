import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseClassCrudComponent } from './courseclass-crud.component';

describe('CourseClassCrudComponent', () => {
  let component: CourseClassCrudComponent;
  let fixture: ComponentFixture<CourseClassCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseClassCrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseClassCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
