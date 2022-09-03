import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherCreateComponent } from './teacher-create.component';

describe('TeacherCreateComponent', () => {
  let component: TeacherCreateComponent;
  let fixture: ComponentFixture<TeacherCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
