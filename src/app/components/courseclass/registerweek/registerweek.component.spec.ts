import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterweekComponent } from './registerweek.component';
import { MessagesModule } from 'primeng/messages';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { MessageService } from 'primeng/api';

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
});
