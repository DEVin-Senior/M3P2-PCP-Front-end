import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseClassUpdateComponent } from './courseclass-update.component';

fdescribe('CourseClassUpdateComponent', () => {
  let component: CourseClassUpdateComponent;
  let fixture: ComponentFixture<CourseClassUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseClassUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseClassUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
