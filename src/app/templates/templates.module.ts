import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SidebarModule} from 'primeng/sidebar';


@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SidebarModule
  ],
  exports: [
    SidebarComponent,
    HeaderComponent
  ]
})
export class TemplatesModule { }
