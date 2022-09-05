import { LayoutDefaultModule } from './layouts/layout-default/layout-default.module';
import { LayoutFullwidthModule } from './layouts/layout-fullwidth/layout-fullwidth.module';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';


import { AccordionModule } from 'primeng/accordion';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { HomeCreateComponent } from './components/home-create/home-create.component';
import { HomeComponent } from './views/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { WeekService } from './components/home-create/service/week-service';



import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { InputMaskModule } from 'primeng/inputmask';
import { TeacherFormComponent } from './components/teacher/teacher-form/teacher-form.component';
import { TeacherCreateComponent } from './views/teacher/teacher-create/teacher-create.component';
import { TeacherUpdateComponent } from './views/teacher/teacher-update/teacher-update.component';
import { RegisterweekComponent } from './components/courseclass/registerweek/registerweek.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './_services/auth/auth.service';
import { TokenInterceptor } from './_services/interceptor/token.interceptor';

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
    TableModule
  ],
  providers: [
    WeekService,
    ReactiveFormsModule,
    CheckboxModule,
    InputMaskModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthService,
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
