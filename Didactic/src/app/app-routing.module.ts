import { RegistroComponent } from './components/registro/registro.component';
import { HomeComponent } from './components/home/home.component';
import { Instructor3Component } from './components/instructor3/instructor3.component';
import { Instructor2Component } from './components/instructor2/instructor2.component';
import { Instructor1Component } from './components/instructor1/instructor1.component';
import { InstructorComponent } from './components/instructor/instructor.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { LoginComponent } from './components/login/login.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructorQuizComponent } from './components/instructor-quiz/instructor-quiz.component';
import { InstructorLaboratorioComponent } from './components/instructor-laboratorio/instructor-laboratorio.component';
import { InstructorLaboratorioCrearComponent } from './components/instructor-laboratorio-crear/instructor-laboratorio-crear.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'alumnos',component:AlumnosComponent},
  {path:'administrador',component:AdministradorComponent},
  {path:'instructor',component:InstructorComponent},
  {path:'instructor1',component:Instructor1Component},
  {path:'instructor2',component:Instructor2Component},
  {path:'instructor3',component:Instructor3Component},
  {path:'home',component:HomeComponent},
  {path:'',component:HomeComponent},
  {path:'signup',component:LoginComponent},
  {path:'registro',component:RegistroComponent},
  {path:'instructor-quiz',component:InstructorQuizComponent},
  {path:'instructor pantalla quiz',component:InstructorLaboratorioComponent},
  {path:'instructor crear laboratorio',component:InstructorLaboratorioCrearComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
