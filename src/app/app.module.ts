import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { ClassCrudComponent } from './views/class-crud/class-crud.component';

import { ClassCreateComponent } from './components/class/class-create/class-create.component';
import { ClassUpdateComponent } from './components/class/class-update/class-update.component';
import { ClassReadComponent } from './components/class/class-read/class-read.component';
import { ClassDeleteComponent } from './components/class/class-delete/class-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassCrudComponent,
    ClassCreateComponent,
    ClassUpdateComponent,
    ClassReadComponent,
    ClassDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
