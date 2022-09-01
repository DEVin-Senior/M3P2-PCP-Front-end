import { LayoutFullwidthModule } from './layouts/layout-fullwidth/layout-fullwidth.module';
import { LayoutDefaultModule } from './layouts/layout-default/layout-default.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { AccordionModule } from 'primeng/accordion';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';

@NgModule({
  declarations: [
    AppComponent
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
    CalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
