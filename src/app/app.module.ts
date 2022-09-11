import { LayoutDefaultModule } from './layouts/layout-default/layout-default.module';
import { LayoutFullwidthModule } from './layouts/layout-fullwidth/layout-fullwidth.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { PasswordModule } from 'primeng/password';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { HomeCreateComponent } from './components/home-create/home-create.component';
import { HomeComponent } from './views/home/home.component';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { InputMaskModule } from 'primeng/inputmask';
import { RegisterweekComponent } from './components/courseclass/registerweek/registerweek.component';
import { LoginRegisterComponent } from './components/login/login-register/login-register.component';
import { LoginComponent } from './components/login/login.component';
import { TeacherFormComponent } from './components/teacher/teacher-form/teacher-form.component';
import { TeacherCreateComponent } from './views/teacher/teacher-create/teacher-create.component';
import { TeacherUpdateComponent } from './views/teacher/teacher-update/teacher-update.component';
import { AuthService } from './_services/auth/auth.service';
import { TokenInterceptor } from './_services/interceptor/token.interceptor';
import { MessageService } from 'primeng/api';
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import {ConfirmationService} from 'primeng/api';
import {DialogModule} from 'primeng/dialog';
import { RegisterweekupdateComponent } from './components/courseclass/registerweekupdate/registerweekupdate.component';
import { WeekService } from './_services/week/week-service';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeCreateComponent,
    HomeComponent,
    TeacherCreateComponent,
    TeacherFormComponent,
    TeacherUpdateComponent,
    RegisterweekComponent,
    LoginComponent,
    LoginRegisterComponent,
    RegisterweekupdateComponent
  ],
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
    AllocationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
