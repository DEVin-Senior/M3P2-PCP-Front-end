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

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { HomeCreateComponent } from './components/home-create/home-create.component';
import { HomeComponent } from './views/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { WeekService } from './components/home-create/service/week-service';



import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { InputMaskModule } from 'primeng/inputmask';
import { TeacherFormComponent } from './components/teacher/teacher-form/teacher-form.component';
import { TeacherCreateComponent } from './views/teacher/teacher-create/teacher-create.component';
import { TeacherUpdateComponent } from './views/teacher/teacher-update/teacher-update.component';
import { RegisterweekComponent } from './components/courseclass/registerweek/registerweek.component';
import { AllocationClassReadComponent } from './components/allocation-class-read/allocation-class-read.component';
import { AllocationClassCreateComponent } from './components/allocation-class-create/allocation-class-create.component';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './_services/auth/auth.service';
import { TokenInterceptor } from './_services/interceptor/token.interceptor';
import { LoginComponent } from './components/login/login.component';
import { LoginRegisterComponent } from './components/login/login-register/login-register.component';

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
    LoginRegisterComponent
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
    ImageModule
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
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
