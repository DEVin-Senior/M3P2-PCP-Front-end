import { TemplatesModule } from './../../templates/templates.module';
import { RouterModule } from '@angular/router';
import { CourseClassUpdateComponent } from 'src/app/components/courseclass/courseclass-update/courseclass-update.component';
import { LayoutDefaultComponent } from './layout-default.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CourseClassReadComponent } from 'src/app/components/courseclass/courseclass-read/courseclass-read.component';
import { CourseClassDeleteComponent } from 'src/app/components/courseclass/courseclass-delete/courseclass-delete.component';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { CourseClassCreateComponent } from 'src/app/components/courseclass/courseclass-create/courseclass-create.component';
import { DropdownModule } from 'primeng/dropdown';
import { RegisterweekViewComponent } from 'src/app/views/registerweek-view/registerweek-view.component';
import { AllocationClassReadComponent } from 'src/app/components/allocation-class-read/allocation-class-read.component';
import { TeacherListComponent } from 'src/app/components/teacher/teacher-list/teacher-list.component';
import { CourseClassCrudComponent } from 'src/app/views/courseclass-crud/courseclass-crud.component';


@NgModule({
  declarations: [
    LayoutDefaultComponent,
    CourseClassReadComponent,
    CourseClassCrudComponent,
    CourseClassDeleteComponent,
    CourseClassUpdateComponent,
    CourseClassCreateComponent,
    RegisterweekViewComponent,
    AllocationClassReadComponent,
    TeacherListComponent,
    RegisterweekViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TemplatesModule,
    TableModule,
    CalendarModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CourseClassReadComponent,
    CourseClassCrudComponent
  ]

})
export class LayoutDefaultModule { }
