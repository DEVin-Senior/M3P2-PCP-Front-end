import { CourseClassCreateComponent } from './components/courseclass/courseclass-create/courseclass-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseClassDeleteComponent } from './components/courseclass/courseclass-delete/courseclass-delete.component';
import { CourseClassReadComponent } from './components/courseclass/courseclass-read/courseclass-read.component';
import { CourseClassUpdateComponent } from './components/courseclass/courseclass-update/courseclass-update.component';
import { LayoutDefaultComponent } from './layouts/layout-default/layout-default.component';

const routes: Routes = [{
  path: '',
  component: LayoutDefaultComponent,
  children: [{
    path: '',
    component: CourseClassReadComponent
  },
  {
    path: 'update',
    component: CourseClassUpdateComponent,
  },
  {
    path: 'delete',
    component: CourseClassDeleteComponent,
  },
  {
    path: 'adicionar',
    component: CourseClassCreateComponent
  }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
