import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'primeng/accordion';
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

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
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
      ]
    });
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
