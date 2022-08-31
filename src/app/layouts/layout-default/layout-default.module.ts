import { TemplatesModule } from './../../templates/templates.module';
import { RouterModule } from '@angular/router';
import { CourseClassUpdateComponent } from './../../components/courseclass/courseclass-update/courseclass-update.component';
import { CourseClassCreateComponent } from './../../components/courseclass/courseclass-create/courseclass-create.component';
import { LayoutDefaultComponent } from './layout-default.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseClassReadComponent } from 'src/app/components/courseclass/courseclass-read/courseclass-read.component';
import { CourseClassDeleteComponent } from 'src/app/components/courseclass/courseclass-delete/courseclass-delete.component';



@NgModule({
  declarations: [
    LayoutDefaultComponent,
    CourseClassCreateComponent,
    CourseClassReadComponent,
    CourseClassDeleteComponent,
    CourseClassUpdateComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TemplatesModule
  ],
  
})
export class LayoutDefaultModule { }
