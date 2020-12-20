import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeacherListComponent } from './pages/TeacherList/index.component';
import { IndexLandingComponent } from './pages/Landing/index.component';
import { TeacherFormComponent } from './pages/TeacherForm/index.component';


const routes: Routes = [
  {path: '', component: IndexLandingComponent},
  {path: 'study', component: TeacherListComponent},
  {path: 'give-classes', component: TeacherFormComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
