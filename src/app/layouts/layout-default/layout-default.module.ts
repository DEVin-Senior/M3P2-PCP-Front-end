import { TemplatesModule } from './../../templates/templates.module';
import { RouterModule } from '@angular/router';
import { CourseClassUpdateComponent } from 'src/app/components/courseclass/courseclass-update/courseclass-update.component';
import { LayoutDefaultComponent } from './layout-default.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseClassReadComponent } from 'src/app/components/courseclass/courseclass-read/courseclass-read.component';
import { CourseClassDeleteComponent } from 'src/app/components/courseclass/courseclass-delete/courseclass-delete.component';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { CourseClassCreateComponent } from 'src/app/components/courseclass/courseclass-create/courseclass-create.component';
import { DropdownModule } from 'primeng/dropdown';
import { RegisterweekViewComponent } from 'src/app/views/registerweek-view/registerweek-view.component';


@NgModule({
  declarations: [
    LayoutDefaultComponent,
    CourseClassReadComponent,
    CourseClassDeleteComponent,
    CourseClassUpdateComponent,
    CourseClassCreateComponent,
    RegisterweekViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TemplatesModule,
    TableModule,
    CalendarModule,
    DropdownModule
  ],

})
export class LayoutDefaultModule { }
