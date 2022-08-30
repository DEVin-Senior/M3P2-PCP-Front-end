import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseClassDeleteComponent } from './courseclass-delete.component';

describe('CourseClassDeleteComponent', () => {
  let component: CourseClassDeleteComponent;
  let fixture: ComponentFixture<CourseClassDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseClassDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseClassDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
