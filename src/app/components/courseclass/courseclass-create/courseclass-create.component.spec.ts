import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseClassCreateComponent } from './courseclass-create.component';

describe('CourseClassCreateComponent', () => {
  let component: CourseClassCreateComponent;
  let fixture: ComponentFixture<CourseClassCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseClassCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseClassCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
