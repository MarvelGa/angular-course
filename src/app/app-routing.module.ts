import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {path: '', redirectTo: 'courses', pathMatch: 'full'},
  {path: 'courses', loadChildren: () => import ('./pages/courses/courses.module').then(m => m.CoursesModule)},
  {path: 'login', loadChildren: () => import ('./pages/login/login.module').then(m => m.LoginModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
