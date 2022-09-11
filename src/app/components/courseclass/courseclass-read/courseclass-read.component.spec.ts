import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MessageService } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';
import { CourseClassReadComponent } from './courseclass-read.component';

describe('CourseClassReadComponent', () => {
  let component: CourseClassReadComponent;
  let fixture: ComponentFixture<CourseClassReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseClassReadComponent ],
      imports: [HttpClientModule, MessagesModule],
      providers: [HttpClient, MessageService, HttpHandler]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseClassReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
