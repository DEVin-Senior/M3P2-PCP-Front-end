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



import { ReactiveFormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { InputMaskModule } from 'primeng/inputmask';
import { TeacherFormComponent } from './components/teacher/teacher-form/teacher-form.component';
import { TeacherCreateComponent } from './views/teacher/teacher-create/teacher-create.component';
import { TeacherUpdateComponent } from './views/teacher/teacher-update/teacher-update.component';
import { RegisterweekComponent } from './components/courseclass/registerweek/registerweek.component';
import { AllocationClassReadComponent } from './components/allocation-class-read/allocation-class-read.component';
import { AllocationClassCreateComponent } from './components/allocation-class-create/allocation-class-create.component';

@NgModule({
  declarations: [
    AppComponent,
    TeacherCreateComponent,
    TeacherFormComponent,
    TeacherUpdateComponent,
    RegisterweekComponent,
    
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
    ReactiveFormsModule,
    CheckboxModule,
    InputMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
