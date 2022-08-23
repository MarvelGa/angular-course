import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { CoursesPageComponent } from "./components/courses-page/courses-page.component";
import { CoursePageComponent } from "./components/course-page/course-page.component";

const routes: Routes = [
/*  { path: 'courses', component: CoursesPageComponent },*/
/*  { path: 'new-course', component: CoursePageComponent }*/

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
