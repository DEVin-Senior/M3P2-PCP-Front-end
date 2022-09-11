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
});
