import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { CourseClassCrudComponent } from './views/courseclass-crud/courseclass-crud.component';
import { CourseClassCreateComponent } from './components/courseclass/courseclass-create/courseclass-create.component';
import { CourseClassUpdateComponent } from './components/courseclass/courseclass-update/courseclass-update.component';
import { CourseClassReadComponent } from './components/courseclass/courseclass-read/courseclass-read.component';
import { CourseClassDeleteComponent } from './components/courseclass/courseclass-delete/courseclass-delete.component';

import { LayoutDefaultComponent } from './layouts/layout-default/layout-default.component';
import { LayoutFullwidthComponent } from './layouts/layout-fullwidth/layout-fullwidth.component';

import { SidebarComponent } from './templates/sidebar/sidebar.component';
import { HeaderComponent } from './templates/header/header.component';

import { AccordionModule } from 'primeng/accordion';

@NgModule({
  declarations: [
    AppComponent,
    CourseClassCrudComponent,
    CourseClassCreateComponent,
    CourseClassUpdateComponent,
    CourseClassReadComponent,
    CourseClassDeleteComponent,
    HeaderComponent,
    SidebarComponent,
    LayoutDefaultComponent,
    LayoutFullwidthComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
