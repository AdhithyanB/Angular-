import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';
import { FormsComponent } from './forms/forms.component';
const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'education',component:EducationComponent},
  {path:'projects',component:ProjectsComponent},
  {path:'forms',component:FormsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
