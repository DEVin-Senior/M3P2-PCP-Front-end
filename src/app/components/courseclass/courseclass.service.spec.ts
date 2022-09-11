import { TestBed } from '@angular/core/testing';
import { CourseClassService } from './courseclass.service';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';

describe('CourseClassService', () => {
  let service: CourseClassService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, MessagesModule],
      providers: [MessageService],
      schemas: []
    });
    service = TestBed.inject(CourseClassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
