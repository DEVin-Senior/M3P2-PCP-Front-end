import { CourseClassCreateComponent } from './components/courseclass/courseclass-create/courseclass-create.component';
import { TeacherUpdateComponent } from './views/teacher/teacher-update/teacher-update.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseClassDeleteComponent } from './components/courseclass/courseclass-delete/courseclass-delete.component';
import { CourseClassReadComponent } from './components/courseclass/courseclass-read/courseclass-read.component';
import { CourseClassUpdateComponent } from './components/courseclass/courseclass-update/courseclass-update.component';
import { LayoutDefaultComponent } from './layouts/layout-default/layout-default.component';
import { TeacherCreateComponent } from './views/teacher/teacher-create/teacher-create.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutDefaultComponent,
    children: [
      // {
      //   path: 'home',
      //   //component: HomeComponent,
      // },
      // {
      //   path: 'login',
      //   //component: LoginComponent,
      // },
      // {
      //   path: '**',
      //   //component: PageNotFoundComponent,
      // },
      // {
      //   path: 'docentes',
      //   //component: TeacherClassReadComponent,
      // },
      {
        path: 'docente/adicionar',
        component: TeacherCreateComponent,
      },
      {
        path: 'docente/atualizar/:id',
        component: TeacherUpdateComponent,
      },
      // {
      //   path: 'docentes/arquivar/:id',
      //   //component: TeacherClassArchiveComponent,
      // },
      {
        path: 'turmas',
        component: CourseClassReadComponent,
      },
      {
        path: 'turmas/atualizar/:id',
        component: CourseClassUpdateComponent,
      },
      {
        path: 'turmas/adicionar',
        component: CourseClassCreateComponent,
      },
      {
        path: 'turmas/deletar/:id',
        component: CourseClassDeleteComponent,
      },
      // {
      //   path: 'alocacoes',
      //   //component: AllocationClassReadComponent,
      // },
      // {
      //   path: 'alocacoes/adicionar/:id',
      //   //component: AllocationClassCreateComponent,
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
