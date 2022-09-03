import { LayoutFullwidthModule } from './layouts/layout-fullwidth/layout-fullwidth.module';
import { LayoutDefaultModule } from './layouts/layout-default/layout-default.module';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';

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

@NgModule({
  declarations: [
    AppComponent,
    HomeCreateComponent,
    HomeComponent,
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
    WeekService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
