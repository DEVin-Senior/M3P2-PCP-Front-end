import { CourseClassCreateComponent } from './components/courseclass/courseclass-create/courseclass-create.component';
import { TeacherUpdateComponent } from './views/teacher/teacher-update/teacher-update.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseClassDeleteComponent } from './components/courseclass/courseclass-delete/courseclass-delete.component';
import { CourseClassReadComponent } from './components/courseclass/courseclass-read/courseclass-read.component';
import { CourseClassUpdateComponent } from './components/courseclass/courseclass-update/courseclass-update.component';
import { LayoutDefaultComponent } from './layouts/layout-default/layout-default.component';
import { HomeComponent } from './views/home/home.component';
import { TeacherCreateComponent } from './views/teacher/teacher-create/teacher-create.component';
import { TeacherListComponent } from './components/teacher/teacher-list/teacher-list.component';
import { RegisterweekComponent } from './components/courseclass/registerweek/registerweek.component';
import { AllocationClassReadComponent } from './components/allocation-class-read/allocation-class-read.component';
import { LoginComponent } from './components/login/login.component';
import { LoginRegisterComponent } from './components/login/login-register/login-register.component';
import { CourseClassCrudComponent } from './views/courseclass-crud/courseclass-crud.component';
import { AllocateTeacherComponent } from './components/allocate-teacher/allocate-teacher/allocate-teacher.component';
import { RegisterweekupdateComponent } from './components/courseclass/registerweekupdate/registerweekupdate.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'login/register',
    component: LoginRegisterComponent,
  },
  { 
    path: 'layout',
    component: LayoutDefaultComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      // {
      //   path: '**',
      //   //component: PageNotFoundComponent,
      // },
      {
      path: 'docentes',
      component: TeacherListComponent,
      },
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
        component: CourseClassCrudComponent,
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
      {
       path: 'alocacoes',
       component: AllocationClassReadComponent,
      },

      {
        path: 'turmas/modulo',
        component: RegisterweekComponent,
      },
      {
        path: 'adicionar',
        component: AllocateTeacherComponent,
      {
        path: 'turmas/atualizar/:id/modulo', 
        component: RegisterweekupdateComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
