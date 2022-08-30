import { LayoutDefaultModule } from './layouts/layout-default/layout-default.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { AccordionModule } from 'primeng/accordion';

import {MenuItem, PrimeIcons} from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AccordionModule,
    LayoutDefaultModule
  ],
  providers: [PrimeIcons],
  bootstrap: [AppComponent]
})
export class AppModule { }
