import {NgModule} from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import {CoursesComponent} from "./pages/courses/courses.component";
import {CourseComponent} from "./shared/course/course.component";

const routes: Routes = [
  {path: '', redirectTo: 'courses', pathMatch: 'full'},
  {path: 'courses', component: CoursesComponent, pathMatch: 'full'},
  {path: 'courses/new-course', component: CourseComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
