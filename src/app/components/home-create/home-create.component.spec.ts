 import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'primeng/accordion';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { ImageModule } from 'primeng/image';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { PasswordModule } from 'primeng/password';
import { TableModule } from 'primeng/table';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { LayoutDefaultModule } from 'src/app/layouts/layout-default/layout-default.module';
import { LayoutFullwidthModule } from 'src/app/layouts/layout-fullwidth/layout-fullwidth.module';
import { AuthService } from 'src/app/_services/auth/auth.service';
import { TokenInterceptor } from 'src/app/_services/interceptor/token.interceptor';
import { WeekService } from 'src/app/_services/week/week-service';

import { HomeCreateComponent } from './home-create.component';

describe('HomeCreateComponent', () => {
  let component: HomeCreateComponent;
  let fixture: ComponentFixture<HomeCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCreateComponent ],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        AccordionModule,
        MessagesModule,
        MessageModule,
        LayoutDefaultModule,
        LayoutFullwidthModule,
        InputTextModule,
        CalendarModule,
        ButtonModule,
        DropdownModule,
        HttpClientModule,
        FormsModule,
        TableModule,
        ReactiveFormsModule,
        ImageModule,
        InputMaskModule,
        CheckboxModule,
        ConfirmPopupModule,
        DialogModule,
        PasswordModule
      ],
      providers: [
        AuthService,
        WeekService,
        ReactiveFormsModule,
        CheckboxModule,
        InputMaskModule,
        HttpClientModule,
        FormsModule,
        HttpClient,
        MessageService,
        ConfirmationService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: TokenInterceptor,
          multi: true
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
}); 
