import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'primeng/accordion';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { InputTextModule } from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { CourseClassCrudComponent } from './views/courseclass-crud/courseclass-crud.component';
import { CourseClassCreateComponent } from './components/courseclass/courseclass-create/courseclass-create.component';
import { CourseClassDeleteComponent } from './components/courseclass/courseclass-delete/courseclass-delete.component';
import { CourseClassReadComponent } from './components/courseclass/courseclass-read/courseclass-read.component';
import { CourseClassUpdateComponent } from './components/courseclass/courseclass-update/courseclass-update.component';

import { LayoutDefaultComponent } from './layouts/layout-default/layout-default.component';
import { LayoutFullwidthComponent } from './layouts/layout-fullwidth/layout-fullwidth.component';

import { SidebarComponent } from './templates/sidebar/sidebar.component';
import { HeaderComponent } from './templates/header/header.component';



@NgModule({
  declarations: [
    AppComponent,
    CourseClassCrudComponent,
    CourseClassCreateComponent,
    CourseClassDeleteComponent,
    CourseClassReadComponent,
    CourseClassUpdateComponent,
    HeaderComponent,
    SidebarComponent,
    LayoutDefaultComponent,
    LayoutFullwidthComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AccordionModule,
    MessagesModule,
    MessageModule,
    InputTextModule,
    CalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
