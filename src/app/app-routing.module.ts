import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import {AuthGuard} from "./shared/auth-guard/auth.guard";

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', loadChildren: () => import ('./pages/login/login.module').then(m => m.LoginModule)},
  {path: 'courses', loadChildren: () => import ('./pages/courses/courses.module').then(m => m.CoursesModule), canLoad: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
