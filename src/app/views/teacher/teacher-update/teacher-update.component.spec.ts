import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherUpdateComponent } from './teacher-update.component';

describe('TeacherUpdateComponent', () => {
  let component: TeacherUpdateComponent;
  let fixture: ComponentFixture<TeacherUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
